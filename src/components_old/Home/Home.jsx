import { React } from "react";
import "styles/home/home.scss";
import { Container, Row } from "react-bootstrap";
import Countries from "./api/country";
import Roles from "./api/roles";
import SelectionBar from "./selections/SelectionBar"
import Plots from "./api/plots";

export default function Home() {

  return (
    <Container>
      <SelectionBar/>
    </Container>
  );
}
