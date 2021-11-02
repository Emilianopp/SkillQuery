import axios from "axios";
import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";

export default function Regions(props) {
  
  const [regions, setRegion] = useState("Select Region");
  useEffect(() => {
    fetch("/region/").then((response) =>
      response.json().then((data) => {
        console.log(data)
        setRegion(data);
      })
    ).catch(e => {console.log(e)});
  }, [props.country]);
  
    // Handles selection of country
    const [selection, setSelection] = useState("Select Region");
    const handleSelect=(e)=>{
      axios.post(`/set_region/${e}`)
      setSelection(e)
    }
  if (props.country !== "Select Country") {
    return (
      <>
        <Dropdown
          id="regions"
          tittle="Select region"
        onSelect = {handleSelect}>
          <Dropdown.Toggle id="dropdown-basic">{selection}</Dropdown.Toggle>
          <Dropdown.Menu>
            {regions?.map((region) => (
              <Dropdown.Item eventKey = {region}> {region}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  } else {
    return <>  </>;
  }
}
