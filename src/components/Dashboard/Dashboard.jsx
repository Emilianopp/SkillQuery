import React, { useEffect } from 'react'
import content from 'content/content.json'
import AnalysisHook from 'components/factories/AnalysisHook';
function Dashboard({searchKeys}) {
    let analysis = [];
    let watching = []
    searchKeys?.map((key) => { 
        let tmp = {}
        tmp[key.id] = key.sel
        watching.push(tmp) 
    })
    content.analysisCalls.map((item) => {
        analysis.push(AnalysisHook(item,watching));
    });


  
 

    return (
        <div>
           {console.log(analysis[0])}
        </div>
    )
}

export default Dashboard
 