import call from "components/api/call";
import React, { useEffect, useState } from "react";

function Dependant(build, depedency,depedencySel) {
  
  const [data, setData] = useState({});
  const [stateSelection, sateteSelector] = useState([build.default]);
  useEffect(() => {
    fetchData();
  }, [depedency]);

  const fetchData = () => {
    let temp = {};
    depedency.map((item) =>
      call(
        `${build.endpoints.getter.url}/${item}`,
        build.endpoints.getter.method
      ).then((res) => {
        temp[`${item}`] = res;
        setData({ ...data, ...temp });
      })
    );
  };
  const out = {
    ...build,
    setterSelection: sateteSelector,
    state: data,
    sel: stateSelection,
    setter: setData,
    depedencyState: depedency,
    depedencySelection: depedencySel,
  };
  return out;
}

export default Dependant;
