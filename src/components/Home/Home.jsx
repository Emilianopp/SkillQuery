import { React } from "react";
import "styles/home/home.scss";
import { Container } from "react-bootstrap";
import Locations from "./api/country";
import Roles from "./api/roles";

import Plots from "./api/plots";

export default function Home() {

  return (
    <Container>

        <div class="title">

          <h1> &#9745; SkillQuery    </h1>

        </div>
       
        <div class="dropdown-container">

        <Locations/>
        <Roles />
        <Plots/>

        </div>


    </Container>
  );
}
