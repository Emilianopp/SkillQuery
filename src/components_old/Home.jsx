import { React } from "react";
import "styles/home/home.scss";
import { Container, Row } from "react-bootstrap";
import Countries from "./Home/api/country";
import Roles from "./Home/api/roles";
import SelectionBar from "./Home/selections/SelectionBar"
import Plots from "./Home/api/plots";

export default function Home() {

  return (
    <Container>
      <SelectionBar/>
    </Container>
  );
}
