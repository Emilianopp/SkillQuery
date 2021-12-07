import { React, useEffect, useState } from "react";
import "styles/home/home.scss";
import { Container, Row, Spinner } from "react-bootstrap";
import Countries from "../api/country";
import Roles from "../api/roles";
import Plots from "../api/plots";
async function req(url, method) {
  const response = await fetch(`https://skillquery.herokuapp.com/${url}`, {
    method: method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    credentials: "include",
  }).catch(function(err){console.log(err);});
  const out = await response.json();

  return out;
}

export default function SelectionBar() {
  const [region, setRegion] = useState("");
  const [role, setRole] = useState("");
  const [countryLoad, countryLoaded] = useState(false);
  const [roleLoad, roleLoaded] = useState(false);
  const [load, setLoad] = useState(false);
  const [roles, setRoles] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    req(`country`, "GET").then((data) => {
      setCountry(data);
      sendCountryLoadedParent(true)

    });
  }, []);
  useEffect(() => {

    req("role_dropdown").then((data) => {
      setRoles(data);
      sendRoleLoadedParent(true)
    });
  }, []);

  const sendRegionParent = (index) => {
    setRegion(index);
  };
  const sendRoleParent = (index) => {
    setRole(index);
  };
  const sendCountryLoadedParent = (index) => {
    countryLoaded(index);
  };
  const sendRoleLoadedParent = (index) => {
    roleLoaded(index);
  };

  useEffect(() => {
    if (roleLoad && countryLoad){
      setLoad(true)
    }
  }, [roleLoad,countryLoad])

  return (
    <div>
      <Row>
        <div class="title">
          <h1> &#9745; SkillQuery </h1>
        </div>
        {load ? (
          <div class="dropdown-container">
            <Countries
              sendRegionParent={sendRegionParent}
              sendCountryLoadedParent={sendCountryLoadedParent}
              countries = {country}
            />
            <Roles
              sendRoleParent={sendRoleParent}
              sendRoleLoadedParent={sendRoleLoadedParent}
              roles = {roles}
            />
          </div>
        ) : (
          <div className="SpinnerBox">
            <Spinner className="Spinner" animation="border" />
          </div>
        )}
      </Row>
      <Row classname="plots">
        <Plots region={region} role={role} />
      </Row>
    </div>
  );
}
