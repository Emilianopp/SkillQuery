import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";
import axios from "axios";



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
export default function Roles({sendRoleParent}) {
  const [roles, setRole] = useState();
  useEffect(() => {

    req("role_dropdown").then((data) => {
      setRole(data);
    });
  }, []);
  // Handles selection of country
  const [selection, setSelection] = useState("Select Role");
  const handleSelect = (e) => {
    setSelection(e);
    req(`role/${e}`, "POST");
    sendRoleParent(e)
  };

  return (
    <>
      <Dropdown id="roles" tittle="Select role" onSelect={handleSelect}>
        <Dropdown.Toggle id="dropdown-basic">{selection}</Dropdown.Toggle>
        <Dropdown.Menu>
          {roles?.map((role) => (
            <Dropdown.Item key={role} eventKey={role}>
              {" "}
              {role}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
