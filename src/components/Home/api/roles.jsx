import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";
import axios from "axios";

export default function Roles() {
  const [roles, setRole] = useState();
  useEffect(() => {
    fetch("/role_dropdown").then((response) =>
      response.json().then((data) => {
        console.log({ data });
        setRole(data);
      })
    );
  }, []);
    // Handles selection of country
    const [selection, setSelection] = useState("Select Role");
    const handleSelect=(e)=>{
      setSelection(e)
      axios.post(`/role/${e}`).catch(error => { console.log(error)})
    }
  
  return (
    <>
      <Dropdown id="roles" tittle="Select role" onSelect = {handleSelect}>
        <Dropdown.Toggle id="dropdown-basic">{selection}</Dropdown.Toggle>
        <Dropdown.Menu>
          {roles?.map((role) => (
            <Dropdown.Item key = {role} eventKey = {role}> {role}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
