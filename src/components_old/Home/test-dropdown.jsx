import axios from "axios";
import { React, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "styles/home/home.scss";

export default function TestDropdown(props) {
    return (
      <>
        <Dropdown
          id="regions"
          title="Select region"
          >
          <Dropdown.Toggle id="dropdown-basic" size="lg">Test Dropdown</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">TEST</Dropdown.Item>
            <Dropdown.Item eventKey="1">TEST</Dropdown.Item>
            <Dropdown.Item eventKey="1">TEST</Dropdown.Item>
            <Dropdown.Item eventKey="1">TEST</Dropdown.Item>
            <Dropdown.Item eventKey="1">TEST</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  } 
