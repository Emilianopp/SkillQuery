import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// fusion charts pie chart for visualization 
// plots  education degree counts 
export default function dataation({data}) {

  if (data.length !== 0) {
    
    charts(FusionCharts);

    const dataSource = {
      chart: {
        caption: "Proportion of Degrees",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion",
        palettecolors:  "0caa41,ff7733,0cacac"
      },
      data: [...data]  
    };
    return (
        <ReactFusioncharts
          type="doughnut2d"
          width="500"
          height="400"
          dataFormat="JSON"x
          dataSource={dataSource}
        />
      );
    }
  else{
    return(<></>)
  }
}
