import axios from "axios";
import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";


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
export default function Regions({ country, regions }) {
  console.log(regions, "REGIOOOONS");

  // Handles selection of country
  const [selection, setSelection] = useState("All");
  const handleSelect = (e) => {
    req(`set_region/${e}`, "POST");
    setSelection(e);
  };
  if (country !== "Select Country") {
    console.log(regions);
    return (
      <>
        <Dropdown id="regions" tittle="Select region" onSelect={handleSelect}>
          <Dropdown.Toggle id="dropdown-basic">{selection}</Dropdown.Toggle>
          <Dropdown.Menu>
            {regions?.map((region) => (
              <Dropdown.Item key={region.id} eventKey={region}>
                {" "}
                {region}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  } else {
    return <> </>;
  }
}
