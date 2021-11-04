import { React } from "react";
import "styles/home/home.scss";
import { Container } from "react-bootstrap";
import Locations from "./api/country";
import Roles from "./api/roles";
import ProgrammingLanguages from "./api/plots";
export default function Home() {

  return (
    <Container>
        <Locations/>
        <Roles />
        <ProgrammingLanguages/>
       
    </Container>
  );
}
