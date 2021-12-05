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
export default function Regions({ country, regions ,sendRegionParent}) {

  // Handles selection of country
  const [selection, setSelection] = useState("Select Region");
  const handleSelect = (e) => {
    req(`set_region/${e}`, "POST");
    setSelection(e);
    sendRegionParent(e)
  };
  if (country !== "Select Country") {
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
