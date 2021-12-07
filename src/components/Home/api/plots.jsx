import React, { useEffect, useState } from "react";
import { Button, Container, Col, Row, Spinner } from "react-bootstrap";
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
  }).catch(function (err) {
    console.log(err);
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
  const [techsLoad, setTechsLoaded] = useState(false);
  const [packagesLoad, setPackagesLoaded] = useState(false);
  const [opsLoad, setOpsLoaded] = useState(false);
  const [educationLoad, setEducationLoaded] = useState(false);
  const [mapsLoad, setMapLoaded] = useState(true);
  const [countryLoad, setCountryLoaded] = useState(false);

  const [loaded, setLoaded] = useState(true);

  // On form submit api requests
  const handleClick = () => {
    setLoaded(false);
    req("tech", "GET").then((data) => {
      setTechs(data);
      setTechsLoaded(true);
    });
    req("packages", "GET").then((data) => {
      setPackages(data);
      setPackagesLoaded(true);
    });
    req("education", "GET").then((data) => {
      setEducation(data);
      setEducationLoaded(true);
    });
    req("get_country", "GET").then((data) => {
      setCountry(data);
      setCountryLoaded(true);
    });
    req("map", "GET").then((data) => {
      setMaps(data);
      setMapLoaded(true);
    });
    req("ops", "GET").then((data) => {
      setOps(data);
      setOpsLoaded(true);
    });
  };

  useEffect(() => {
    if (opsLoad && mapsLoad && countryLoad && educationLoad && techsLoad && packagesLoad) {
      setLoaded(true);
      setMapLoaded(false);
      setPackagesLoaded(false);
      setCountryLoaded(false);
      setOpsLoaded(false);
      setEducationLoaded(false);
    }
  }, [opsLoad, mapsLoad, educationLoad, techsLoad, countryLoad,packagesLoad]);

  if (role !== "" && region !== "") {
    return (
      <>
        <div className="buttonContainer">
          <Button className="button" onClick={handleClick}>
            submit
          </Button>
        </div>
        {loaded ? (
          <div>
            <Container className="plotContainer">
              <Row>
                <Col lg={6} xs={6}>
                  <Bar
                    data={techs.counts}
                    title={`Programming Languages Used Across ${techs.numRoles} Postings`}
                  />
                </Col>
                <Col lg={6} xs={6}>
                  <Bar
                    data={packages.counts}
                    title={`Packages Languages Used Across ${packages.numRoles} Postings`}
                  />
                </Col>
              </Row>

              <Row>
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
              <Col className="Map">
                <Map data={maps} country={country} />
              </Col>
            </Container>
          </div>
        ) : (

          <div className = "SpinnerBox">
          <Spinner className = "Spinner" animation="border" />
            </div>
        )}
      </>
    );
  } else {
    return null;
  }
}
