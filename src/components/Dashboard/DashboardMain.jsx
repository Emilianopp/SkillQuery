import React, { useState } from "react";
import { Container, Button, Spinner, Row, Col } from "react-bootstrap";
import content from "content/content.json";

import Dashboard from "./Dashboard";
import completedCalls from "components/api/completedCalls";
import NonDependant from "components/factories/NonDependant";
import Dependant from "components/factories/Dependant";
import DependantDropdowns from "components/menu/DependantDropdowns";
import NonDependantDropdowns from "components/menu/NonDependantDropdowns";
import { css } from "@emotion/css";
import SpinnerMain from "components/spinner/SpinnerMain";


export default function DashboardMain({contentHeight}) {

    let styles = {
        dropdown: {
          width: "100%",
          background: "white",
          color: content.colors.black,
          border: "3px solid ",
          borderColor: content.colors.green,
          fontSize: "17px",
          margin: "auto",
          ":after":{ 
              content: '""',
              marginTop: "10px",
              textAlign: "center",
              float: "right",
              justifyContent:"center",
              position: "relative",
              display : "flex",
              color: content.colors.green
          }
        },
        dropdownTitle : {
            fontSize: "17px",
            color: content.colors.black,
            padding: 0,
            margin: 0,
            marginTop: '10px',
            fontWeight: "bold"
        },
        dropdownMenu:{
            width: "100%"
            
      
        },
        Col: {
          textAlign: "center",
        },
        dropdownCont:{
          paddingLeft:0,
          paddingTop: "0px",
          paddingBottom: "20px"
        },
        ContainerStyles: {
          width: "100vw",
          height: "auto",
          minWidth: "100vw",
          minHeight: "auto",
          paddingTop: "0vw",
          paddingBottom: "0vw",
          paddingRight: "2vw",
          paddingLeft: "2vw",
          margin: "0",
          
          color: content.colors.black,
          
        },
        RowStyles: {
          width: "100%",
          minHeight: "100%",
          minWidth: "auto",
          padding: 0,
          margin: 0,
          justifyContent:"center",
          
        },
      
        ColDropdowns: {
          padding: 0,
          margin: 0,
          ooverflow: 'hidden'
        },
        plotCol: { 
            height: `${contentHeight/2}vh`,
            padding: 0,
            margin: 0,
            ooverflow: 'hidden'
        }
      };


  const [submit, setSubmit] = useState(false);
  let dependantManager = [];
  let nonDependantManager = [];

  content.nonDependantDropdowns.map((item) => {
    nonDependantManager.push(NonDependant(item));
  });

  content.dependantDropdowns.map((item) => {
    let depState = nonDependantManager.find(
      (dep) => dep.id === item.dependancyId
    );
    dependantManager.push(Dependant(item, depState.state, depState.sel));
  });
  return (
    <Container className={css(styles.ContainerStyles)}>
      <Row className={css(styles.RowStyles)}>
        {completedCalls([...dependantManager, ...nonDependantManager]) ? (
          <>
            {" "}
            <Col className={css(styles.ColDropdowns)} md={2}>
              <NonDependantDropdowns
                menuContent={nonDependantManager}
                styles={styles}
              />
              {dependantManager?.map((seearchKey) => (
                <DependantDropdowns searchKey={seearchKey} styles={styles} />
              ))}
            </Col>
            <Col className={css(styles.ColStyles)} md={10}>
              <Dashboard
                searchKeys={[...dependantManager, ...nonDependantManager]}
                styles = {styles}
              />
            </Col>
          </>
        ) : (
            <SpinnerMain/>
        )}
      </Row>
    </Container>
  );
}
