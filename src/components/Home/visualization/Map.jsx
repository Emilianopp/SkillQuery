import React from 'react'
import ReactFC from 'react-fusioncharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Canada from 'fusionmaps/maps/fusioncharts.canada';
import FusionCharts from 'fusioncharts';

function getMax(arr, prop) {
    var max;
    for (var i=0 ; i<arr.length ; i++) {
        if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max;
}
export default function Map(props) {
    if (props.data.length !== 0){
        ReactFC.fcRoot(FusionCharts, FusionMaps, Canada, FusionTheme);
        //STEP 2 - Define the dataset and the colorRange of the map
        let max =  getMax(props.data, "value");
        const colorrange = {
            "minvalue": "0",
            "code": "#FFE0B2",
            "gradient": "1",
            "color": [{
                "minvalue": "0",
                "maxvalue": max,
                "color": "#FFD74D"
            }]
        };

        // STEP 3 - Creating the JSON object to store the chart configurations
        const chartConfigs = {
            type: 'maps/canada', // The chart type
            width: '700', // Width of the chart
            height: '400', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                // Map Configuration
                "chart": {
                    "caption": "Average Annual Population Growth",
                    "subcaption": " 1955-2015",
                    "numbersuffix": "%",
                    "includevalueinlabels": "1",
                    "labelsepchar": ": ",
                    "entityFillHoverColor": "#FFF9C4",
                    "theme": "fusion"
                },
                // Aesthetics; ranges synced with the slider
                "colorrange": colorrange,
                // Source data as JSON --> id represents countries of the world.
                "data": [...props.data]
            }
        }




        return (
            <div>
                <
                ReactFC {
                    ...chartConfigs
                }
                />
            </div>
        )
    }
    else{
        return(<></>)
    }
}
