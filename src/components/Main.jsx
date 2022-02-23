import React, { useState } from "react";
import { Container, Button, Spinner, Row, Col } from "react-bootstrap";
import content from "content/content.json";
import NonDependant from "./factories/NonDependant";
import Dependant from "./factories/Dependant";
import NonDependantDropdowns from "./menu/NonDependantDropdowns";
import DependantDropdowns from "./menu/DependantDropdowns";
import Dashboard from "./Dashboard/Dashboard";
import completedCalls from "./api/completedCalls";
import Intro from "./Intro/Intro";
import Navigation from "./Navigation/Navigation";
import DashboardMain from "./Dashboard/DashboardMain";
let navBarHeight= 12
let contentHeight = 100 - navBarHeight

let styles = {
  dropdown: {
    margin: "auto",
    padding: "10px",
  },
  Col: {
    textAlign: "center",
  },
  ContainerStyles: {
    width: "100vw",
    height: "auto",
    minWidth: "100vw",
    minHeight: "auto",
    padding: "0",
    margin: "0",
    color: content.colors.black
  },
  RowStyles: {
    width: "100%",
    height: "auto",
    minWidth: "auto",
    padding: "0",
    margin: "0",
  },

  ColStyles: {
    padding: "0",
    margin: "0",
  },
  NavRow: {
    height: `${navBarHeight}vh`
  },
  DashboardRow:{
    height: `${contentHeight}vh`
  }
};

function Main() {
  const [submit, setSubmit] = useState(false);
  
 

  return (
    <Container style={styles.ContainerStyles}>
      <Row style = {styles.NavRow}> 
      <Navigation setSubmit = {setSubmit}/>
      </Row>
      {!submit && (
        <>
          <Intro setSubmit= {setSubmit} />

        </>
      )}
      

      {submit && (
        <Row style = {styles.DashboardRow}>
        <DashboardMain contentHeight = {contentHeight}/>
        </Row>
      )}
    </Container>
  );
}

export default Main;
