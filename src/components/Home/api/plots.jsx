import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Bar from "../visualization/Bar";
import Education from "../visualization/Education";
import Map from "../visualization/Map";

// Async functiion for promises



async function req(url, method) {
  const response = await fetch(`https://skillquery.herokuapp.com/${url}`, {
    method: method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    credentials: 'include'
  });
  const out = await response.json();

  return out;
}
export default function Plots() {
  // use effect for visuzalizations
  const [techs, setTechs] = useState({ counts: 0 });
  const [packages, setPackages] = useState({ counts: 0 });
  const [ops, setOps] = useState({ counts: 0 });
  const [education, setEducation] = useState([]);
  const [map, setMap] = useState([]);
  const [country, setCountry] = useState([]);

  // On form submit api requests
  const handleClick = () => {
    req("tech",'GET').then((data) => {
      setTechs(data);
    });
    req("packages",'GET').then((data) => {
      setPackages(data);
    });
    req("education",'GET').then((data) => {
      setEducation(data);
    });
    req("map",'GET').then((data) => {
      setMap(data);
    });
    req("ops",'GET').then((data) => {
      setOps(data);
    });
    req("get_country",'GET').then((data) => {
      setCountry(data);
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>submit</Button>
      <Bar
        data={techs.counts}
        title={`Programming Languages Used Across ${techs.numRoles} Postings`}
      />
      <Bar
        data={packages.counts}
        title={`Programming Languages Used Across ${packages.numRoles} Postings`}
      />
      <Bar
        data={ops.counts}
        title={`Programming Languages Used Across ${ops.numRoles} Postings`}
      />
      <Map data={map} country={country} />
      <Education data={education} />
    </div>
  );
}
