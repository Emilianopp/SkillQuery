import { React,useState } from "react";
import "styles/home/home.scss";
import { Container, Row } from "react-bootstrap";
import Countries from "../api/country";
import Roles from "../api/roles";
import Plots from "../api/plots";

export default function SelectionBar() {

    const [region, setRegion] = useState("")
    const [role, setRole] = useState("")

      const sendRegionParent = (index) => { 
        setRegion(index);
      };
      const sendRoleParent = (index) => { 
        setRole(index);
      };
  return (
    <div>
      <Row>
        <div class="title">
          <h1> &#9745; SkillQuery </h1>
        </div>

        <div class="dropdown-container">
          <Countries sendRegionParent = {sendRegionParent}/>
          <Roles sendRoleParent = {sendRoleParent}/>
        </div>
      </Row>
      <Row classname="plots">
          
        <Plots region = {region} role = {role} />
      </Row>
    </div>
  );
}
