import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";
import Regions from "./region";
import axios from "axios";
export default function Countries() {
  const [countries, setCountry] = useState();

  // Fetches countries from API
  useEffect(() => {
    fetch("/country").then((response) =>
      response.json().then((data) => {
        console.log({ data });
        setCountry(data);
      })
    );
  }, []);

  // Handles selection of country
  const [selection, setSelection] = useState("Select Country");
  const handleSelect=(e)=>{
    setSelection(e)
    axios.post(`/set_country/${e}`)
  }



  // Returns dropdown menu with fetched countries
  return (
    <>
      <Dropdown id="countries" tittle="Select Country"  onSelect={handleSelect}>
        <Dropdown.Toggle id="dropdown-basic">{selection}</Dropdown.Toggle>
        <Dropdown.Menu>
          {countries?.map((country) => (
            <Dropdown.Item key = {country} eventKey = {country}> {country}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Regions country = {selection}/>
      </>
  );
}
