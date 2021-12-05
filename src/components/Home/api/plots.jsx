import React, { useEffect, useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import Bar from "../visualization/Bar";
import Education from "../visualization/Education";
import Map from "../visualization/Map";
import "styles/country/country.scss";
import cookies from "js-cookies";
// Async functiion for promises

async function req(url, method) {
  const response = await fetch(`https://skillquery.herokuapp.com/${url}`, {
    method: method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    credentials: "include",
  });
  const out = await response.json();

  return out;
}

export default function Plots({ role, region }) {
  // use effect for visuzalizations
  const [techs, setTechs] = useState({ counts: 0 });
  const [packages, setPackages] = useState({ counts: 0 });
  const [ops, setOps] = useState({ counts: 0 });
  const [education, setEducation] = useState([]);
  const [maps, setMaps] = useState([]);
  const [country, setCountry] = useState([]);

  // On form submit api requests
  const handleClick = () => {
    req("tech", "GET").then((data) => {
      setTechs(data);
    });
    req("packages", "GET").then((data) => {
      setPackages(data);
    });
    req("education", "GET").then((data) => {
      setEducation(data);
    });
    req("get_country", "GET").then((data) => {
      setCountry(data);
    });
    req("map", "GET").then((data) => {
      setMaps(data);
    });
    req("ops", "GET").then((data) => {
      setOps(data);
    });
  };

  if (role !== "" && region !== "") {
    return (
      <div>
        <div className="buttonContainer">
          <Button className="button" onClick={handleClick}>
            submit
          </Button>
        </div>
        <Container className = "plotContainer">

          <Row >
           
            <Col lg = {6} xs = {6}>
              <Bar
                data={techs.counts}
                title={`Programming Languages Used Across ${techs.numRoles} Postings`}
              />
            </Col>
            <Col lg = {6} xs = {6}>
              <Bar
                data={packages.counts}
                title={`Packages Languages Used Across ${packages.numRoles} Postings`}
              />
            </Col>
          </Row>

          <Row >
            <Col>
              <Bar
                data={ops.counts}
                title={`Other Programs Languages Used Across ${ops.numRoles} Postings`}
              />
            </Col>
            <Col>
              <Education data={education} />
            </Col>
          </Row>
          <Col className = "Map">
            <Map data={maps} country={country} />
            </Col>
        </Container>
      </div>
    );
  } else {
    return null;
  }
}
