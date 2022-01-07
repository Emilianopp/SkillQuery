import analysisCall from "components/api/analysisCall";
import React, { useEffect, useState } from "react";

function AnalysisHook(build, recieved) {
  const [data, setData] = useState({});
  const [stateSelection, sateteSelector] = useState(build.default);
  const [loaded, setLoaded] = useState(false);
  let watch = [];
  let unpacked = {}
  recieved.map((item) => { 
   var key = Object.keys(item)[0];
   watch.push(item[key])
   unpacked[key] = item[key]
  })
 

  useEffect(() => {
    fetchData();
  }, [...watch]);

  const fetchData = () => {
    analysisCall(
      build.endpoints.getter.url,
      build.endpoints.getter.method,
      setLoaded,setData,
      {...build.params,...unpacked}
    )
  };
  const out = {
    ...build,
    setterSelection: sateteSelector,
    state: data,
    sel: stateSelection,
    setter: setData,
    loaded: loaded,
  };

  return out;
}

export default AnalysisHook;
