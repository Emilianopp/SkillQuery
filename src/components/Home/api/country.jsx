import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";
import Regions from "./region";
import axios from "axios";

async function req(url,method) {
  const response = await fetch(`/${url}`,{method : method});
  const out = await response.json();

  return out;
}

export default function Countries() {
  const [countries, setCountry] = useState();

  // Fetches countries from API
  useEffect(() => {
    fetch("/country").then((response) =>
      response.json().then((data) => {
        setCountry(data);
      })
    );
  }, []);

  // Handles selection of country
  const [selection, setSelection] = useState("Select Country");
  const handleSelect=(e)=>{
    req(`set_country/${e}`,'POST')
    setSelection(e)
  }

  const [regions, setRegion] = useState("Select Region");
  useEffect(() => {
    
    req(`region/${selection}`,'POST').then(data => {setRegion(data); console.log(data,"in request");})
  }, [selection]);



  // Returns dropdown menu with fetched countries
  return (
    <>
      <Dropdown id="countries" title="Select Country"  onSelect={handleSelect}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">{selection}</Dropdown.Toggle>
        <Dropdown.Menu>
          {countries?.map((country) => (
            <Dropdown.Item key = {country.id} eventKey = {country}> {country}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Regions country = {selection} regions = {regions}/>
      </>
  );
}
