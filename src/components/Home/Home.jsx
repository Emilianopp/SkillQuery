import { React, useEffect, useState } from "react";
import "styles/home/home.scss";
import { Container } from "react-bootstrap";
import Locations from "./api/country";
import Roles from "./api/roles";
export default function Home() {

  return (
    <Container>
        <Locations onChange={console.log("wasup")}/>
        <Roles />
    </Container>
  );
}
