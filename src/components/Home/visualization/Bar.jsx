import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// fusion bar chart 
// utilized to plot packages, techs and ops 
function Bar(props) {
  if( props.data !== 0   && props.data.length !== 0){
    ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    console.log(props.data, props.title)
    const chartConfigs = {
      type: 'column2d',
      width: 500,
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
          "HoverColor": "5",
          "HoverAlpha": "1",
          "bgColor": "#FFFFFF",
          "bgAlpha": "75,75",
          "divLineCOlor": "#323738",
          "divLineAlpha": "20",
          "palettecolors": "#0CAA41"
          

        },
        "data": props.data
      },
    };
    return <ReactFC {...chartConfigs} />;
  }
  else{

    return null
  }
}
export default Bar;