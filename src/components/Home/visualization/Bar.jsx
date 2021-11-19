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
          "caption":props.title,
          "xAxisName": "Technology",
          "order" : "asc",
          "theme": "fusion",
          "updateAnimDuration": "0.4",
          "plotGradientColor": "#003366",
          "plotFillAngle": "0",
          "plotFillAlpha": "60",
          "plotFillRatio": "90,100",
          "plotHoverEffect": "1",
          "value": "1950000",
          "HoverColor": "1",
          "HoverAlpha": "1",
          "bgColor": "#00bfff",
          "bgAlpha": "75,75",
          "divLineCOlor": "#323738",
          "divLineAlpha": "20"

        },
        "data": props.data
      },
    };
    console.log(chartConfigs,"this is in bar")
    return <ReactFC {...chartConfigs} />;
  }
  else{

    return <></>
  }
}
export default Bar;