import axios from "axios";
import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";

export default function Regions({ country }) {
  
  const [regions, setRegion] = useState("Select Region");
  useEffect(() => {
    fetch("/region/").then((response) =>
      response.json().then((data) => {
        console.log(data)
        setRegion(data);
      })
    ).catch(e => {console.log(e)});
  }, [country]);
  
    // Handles selection of country
    const [selection, setSelection] = useState("All");
    const handleSelect=(e)=>{
      axios.post(`/set_region/${e}`)
      setSelection(e)
    }
  if (country !== "Select Country") {
    return (
      <>
        <Dropdown
          id="regions"
          tittle="Select region"
        onSelect = {handleSelect}>
          <Dropdown.Toggle id="dropdown-basic">{selection}</Dropdown.Toggle>
          <Dropdown.Menu>
            {regions?.map((region) => (
              <Dropdown.Item key = {region} eventKey = {region}> {region}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  } else {
    return <>  </>;
  }
}
