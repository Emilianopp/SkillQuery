import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Bar from "../visualization/Bar";
import Education from "../visualization/Education";
import Map from "../visualization/Map";
export default function ProgrammingLanguages() {
  const [techs, setTechs] = useState({counts : 0});
  const [packages, setPackages] = useState({counts : 0});
  const [education, setEducation] = useState({counts : 0});
  const [map, setMap] = useState([]);
  const handleClick = () => {
    fetch("/tech").then((response) =>
      response.json().then((data) => {
        setTechs(data);
      })
    );
    fetch("/packages").then((response) =>
    response.json().then((data) => {
      setPackages(data);
      })
    );

    fetch("/map").then((response) =>
    response.json().then((data) => {
      setMap(data);
      })
    );

    fetch("/education").then((response) =>
    response.json().then((data) => {
      setEducation(data);
      console.log("education", education)
      })
    );



  };


  return (
    <div>
      <Button onClick={handleClick}>submit</Button>
      <Bar data={techs.counts} title = {`Programming Languages Used Across ${techs.numRoles} Postings`}/>
      <Bar data={packages.counts} title = {`Programming Languages Used Across ${packages.numRoles} Postings`}/>
      <Map data = {map}/>
      <Education data = {Education}/>
    </div>
  );
}
