import call from "components/api/call";
import React, { useEffect, useState } from "react";

function NonDependant(build) {
  const [data, setData] = useState([]);
  const [stateSelection, sateteSelector] = useState([build.default]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    call(build.endpoints.getter.url, build.endpoints.getter.method).then(
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
  };

  return out;
}

export default NonDependant;
