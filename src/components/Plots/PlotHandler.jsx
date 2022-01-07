import React, { useEffect } from "react";
import BarGraph from "./BarGraph";
import MapGraph from "./MapGraph";
import PieGraph from "./PieGraph";

function PlotHandler({ data, title, graphType, countrySel }) {
  switch (graphType) {
    case "pie":
      return <PieGraph data={data} title={title} />;

    case "bar":
      return <BarGraph data={data} title = {title}  />;
    case "map":
      return <MapGraph data={data} title={title} countrySel={countrySel} />;
  }
}

export default PlotHandler;
