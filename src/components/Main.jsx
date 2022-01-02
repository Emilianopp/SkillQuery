import React, { useEffect, useState, componentDidMount } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import "styles/master.scss";
import content from "content/content.json";
import NonDependant from "./factories/NonDependant";
import Dependant from "./factories/Dependant";
import NonDependantDropdowns from "./menu/NonDependantDropdowns";
import DependantDropdowns from "./menu/DependantDropdowns";
import Dashboard from "./Dashboard/Dashboard";
import completedCalls from "./api/completedCalls";

function Main() {
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


  const handleClick = () => setSubmit(true);
  return (
    <Container className="page-wrapper">
      {completedCalls(
        [...dependantManager, ...nonDependantManager]) ? (
          <>
            {" "}
            <NonDependantDropdowns menuContent={nonDependantManager} />
            {dependantManager?.map((seearchKey) => (
              <DependantDropdowns searchKey={seearchKey} />
            ))}
            <Button onClick={handleClick}> submit</Button>
            {submit && (
              <Dashboard
                searchKeys={[ ...dependantManager, ...nonDependantManager ]}
              />
            )}
          
          </>
        ) : (
          <div className="SpinnerBox">
            <Spinner className="Spinner" animation="border" />
          </div>
        )
      }
    </Container>
  );
}

export default Main;
