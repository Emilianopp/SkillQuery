import { React, useEffect, useState } from "react";
import "styles/home/home.scss";
import { Container } from "react-bootstrap";
import Locations from "./api/country";
import Roles from "./api/roles";
import TestDropdown from "./test-dropdown";
export default function Home() {

  return (
    <Container>
       {/*} <Locations onChange={console.log("wasup")}/>
        <Roles /> */}

        <div class="title">

          <h1> &#9745; SkillQuery    </h1>

        </div>
       
        <div class="dropdown-container">
          <TestDropdown/>
          <TestDropdown/>
          <TestDropdown/>
        </div>

    </Container>
  );
}
