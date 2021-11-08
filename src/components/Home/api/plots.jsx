import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Bar from "../visualization/Bar";
export default function ProgrammingLanguages() {
  const [techs, setTechs] = useState({counts : 0});
  const [packages, setPackages] = useState({counts : 0});
  const handleClick = () => {
    fetch("/tech").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setTechs(data);
      })
    );
    fetch("/packages").then((response) =>
    response.json().then((data) => {
      console.log(data);
      setPackages(data);
    })
  );
  };


  return (
    <div>
      <Button onClick={handleClick}>submit</Button>
      <Bar data={techs.counts} title = {`Programming Languages Used Across ${techs.numRoles} Postings`}/>
      <Bar data={packages.counts} title = {`Programming Languages Used Across ${packages.numRoles} Postings`}/>
    </div>
  );
}
