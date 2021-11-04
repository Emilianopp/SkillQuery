import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

function Bar(props) {
  if( props.data !== 0){
    ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    
    const chartConfigs = {
      type: 'column2d',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption":"Technologies Used",
          "xAxisName": "Technology",
          "order" : "asc",
          "theme": "fusion",
          "updateAnimDuration": "0.4"
        },
        "data": props.data
      },
    };
    console.log(chartConfigs,"this is in bar")
    return <ReactFC {...chartConfigs} />;
  }
  else{
    console.log(props.data)
    return <>hi</>
  }
}
export default Bar;