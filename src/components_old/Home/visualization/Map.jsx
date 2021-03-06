import React from "react";
import ReactFC from "react-fusioncharts";
import FusionMaps from "fusioncharts/fusioncharts.maps";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Canada from "fusionmaps/maps/fusioncharts.canada";
import USA from "fusionmaps/maps/fusioncharts.usa";
import FusionCharts from "fusioncharts";

// Max function for color coating
function getMax(arr, prop) {
  var max;
  for (var i = 0; i < arr.length; i++) {
    if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
      max = arr[i];
  }
  return max;
}

// Maps for Canada and USA
export default function Map(props) {
  if (props.data.length !== 0) {
    let max = getMax(props.data, "value");
    const sum = props.data.reduce((partial_sum, a) => partial_sum + a, 0);
    let range = (max / sum).toString();
    const colorrange = {
      minvalue: "0",

      code: "#FFFFFF",

      gradient: "1",
      color: [
        {
          minvalue: "1",
          maxvalue: "10",
          code: "#B3FFB3",
        },
        {
          minvalue: "10",
          maxvalue: "30",
          code: "#66ff66",
        },
        {
          minvalue: "30",
          maxvalue: "50",
          code: "#0CAA41",
        },
        {
          minvalue: "50",
          maxvalue: "100",
          code: "#0CAA41",
        },
      ],
    };

    if (props.country === "Canada") {
      ReactFC.fcRoot(FusionCharts, FusionMaps, Canada, FusionTheme);


      // STEP 3 - Creating the JSON object to store the chart configurations
      const chartConfigs = {
        type: "maps/canada", // The chart type
        width: "400", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Map Configuration
          chart: {
            caption: "Spread of Positions Across Canada",
            numbersuffix: "%",
            includevalueinlabels: "1",
            labelsepchar: ": ",
            entityFillHoverColor: "#FFF9C4",
            theme: "fusion",
          },
          // Aesthetics; ranges synced with the slider
          colorrange: colorrange,
          // Source data as JSON --> id represents countries of the world.
          data: [...props.data],
        },
      };
      return (
        <div>
          <ReactFC {...chartConfigs} />
        </div>
      );
    }
    if (props.country === "US") {
      ReactFC.fcRoot(FusionCharts, FusionMaps, USA, FusionTheme);
      let max = getMax(props.data, "value");
      let text = max.toString();

      // STEP 3 - Creating the JSON object to store the chart configurations
      const chartConfigs = {
        type: "maps/usa", // The chart type
        width: "500", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Map Configuration
          chart: {
            caption: "Spread of Positions Across US",
            numbersuffix: "%",
            includevalueinlabels: "1",
            labelsepchar: ": ",
            entityFillHoverColor: "#FFF9C4",
            theme: "fusion",
          },
          // Aesthetics; ranges synced with the slider
          colorrange: colorrange,
          // Source data as JSON --> id represents countries of the world.
          data: [...props.data],
        },
      };
      return (
        <div>
          <ReactFC {...chartConfigs} />
        </div>
      );
    }
    //STEP 2 - Define the dataset and the colorRange of the map
  } else {
    return null;
  }
}
