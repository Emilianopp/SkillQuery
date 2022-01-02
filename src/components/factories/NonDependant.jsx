import call from "components/api/call";
import React, { useEffect, useState } from "react";

function NonDependant(build,watch = []) {
  const [data, setData] = useState([]);
  const [stateSelection, sateteSelector] = useState([build.default]);
  const [loaded,setLoaded] = useState(false)
  useEffect(() => {
    fetchData();
  }, [...watch]);
  
  const fetchData = () => {
    call(build.endpoints.getter.url, build.endpoints.getter.method,setLoaded).then(
      (data) => {
        setData(data);
      }
    );
  };
  const out = {
    ...build,
    setterSelection: sateteSelector,
    state: data,
    sel: stateSelection,
    setter: setData,
    loaded:loaded,
  };

  return out;
}

export default NonDependant;
