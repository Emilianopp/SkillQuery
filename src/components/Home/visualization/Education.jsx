import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// fusion charts pie chart for visualization 
// plots  education degree counts 
export default function dataation({data}) {
  console.log(data.length,'LLALALALALALZL')
  if (data.length !== 0) {
    
    charts(FusionCharts);

    const dataSource = {
      chart: {
        caption: "Android Distribution for our app",

      },
      data: [...data]  
    };
    return (
        <ReactFusioncharts
          type="doughnut2d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      );
    }
  else{
    return(<></>)
  }
}
