import React, { useEffect, useState } from "react";
import content from "content/content.json";
import AnalysisHook from "components/factories/AnalysisHook";
import PlotHandler from "components/Plots/PlotHandler";
import completedCalls from "components/api/completedCalls";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ResponsiveContainer from "recharts";
import SpinnerMain from "components/spinner/SpinnerMain";
function Dashboard({ searchKeys,styles }) {
  let [loaded, setLoaded] = useState(false);
  let analysis = [];
  let watching = [];
  var pivot = []
  let countrySel;
  let maxCols = 3
  let analysisMapper = []
  searchKeys?.map((key) => {
    let tmp = {};
    tmp[key.id] = key.sel;
    watching.push(tmp);
    if (key.id == "country") {
      countrySel = key.sel;
    }
  });



  content.analysisCalls.map((item) => 
      analysisMapper.push(AnalysisHook(item, watching))
  )
  analysisMapper.map((item,i) => {
   if (i === (analysisMapper.length -1)){
      pivot.push(item);
      analysis.push(pivot);
    }
    else if( ((i + 1)  % maxCols ) !== 0 ){ 
      pivot.map((item) => console.log(item))
      pivot.push(item);
    }
    else{ 
      pivot.push(item);
      analysis.push(pivot);
      console.log(analysis)
      pivot = []
    }
  });


  let loadedStates = []
  analysis.map((arr) => arr.map((value) => loadedStates.push(value.loaded)));

 
  useEffect(() => {
    setLoaded(false);
    let val =  []
    analysis.map((item) => { 
      console.log(item)
      val.push(completedCalls(item))
    })
    console.log(val)
    setLoaded(val.every((val) => val))
    
  }, [...loadedStates]);
  
  return (
    <>
      {loaded ? (
      analysis.map((row) => 
      
        <Row>
          {row.map((item, i) => {
            return (
              <Col style  = {styles.plotCol} md={4}>
                <PlotHandler
                  data={item.state}
                  title={item.params.title}
                  graphType={item.params.analysisType}
                  countrySel={countrySel}
                />
              </Col>
            );
          })}
        </Row>
      ) ): (
        <SpinnerMain/>
      )}
    </>
  );
}

export default Dashboard;
