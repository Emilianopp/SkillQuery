import React, { useEffect, useState, componentDidMount } from "react";
import { Container, TabContent } from "react-bootstrap";
import "styles/master.scss";
import content from "content/content.json";
import NonDependant from "./factories/NonDependant";
import Dependant from "./factories/Dependant";
import Menu from "./menu/NonDependantDropdowns";
import NonDependantDropdowns from "./menu/NonDependantDropdowns";
import DependantDropdowns from "./menu/DependantDropdowns";
// import Dashboard from './Dashboard/Dashboard'

function Main() {
  let dependantManager = [];
  let nonDependantManager = [];

  content.nonDependantDropdowns.map((item) => {
    nonDependantManager.push(NonDependant(item));
  });

  content.dependantDropdowns.map((item) => {
    let depState = nonDependantManager.find(
      (dep) => dep.id === item.dependancyId
    );
    dependantManager.push(
      Dependant(item, depState.state, depState.sel)
    );
  });

  return (
    <Container className="page-wrapper">
      <NonDependantDropdowns menuContent={nonDependantManager} />
      {dependantManager?.map((seearchKey) => (
          
       
        <DependantDropdowns searchKey={seearchKey} />
        
      ))}

      {/* <Dashboard state = {states}/> */}
    </Container>
  );
  //   const [role, setRole] = useState([]);
  //   const [country, setCountry] = useState([]);
  //   const [region, setRegion] = useState([]);
  //   const [roleSelection, setRoleSelection] = useState("Select Role");
  //   const [countrySelection, setCountrySelection] = useState("Select Country");
  //   const [regionSelection, setRegionSelection] = useState("Select Region");
  //   const stateManager = [
  //     {
  //       id: "role",
  //       setterSelection: setRoleSelection,
  //       state: role,
  //       sel: roleSelection,
  //       setter: setRole,
  //     },
  //     {
  //       id: "region",
  //       setterSelection: setRegionSelection,
  //       state: region,
  //       sel: regionSelection,
  //       setter: setRegion,
  //       dependant: {"dependantState" : country},
  //     },
  //     {
  //       id: "country",
  //       setterSelection: setCountrySelection,
  //       state: country,
  //       sel: countrySelection,
  //       setter: setCountry,
  //     },
  //   ];

  //   const menuContent = mergeJson(stateManager, content.endpoints);
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = () => {
  //     console.log(menuContent);
  //     menuContent.map((item) => {
  //       if (item.dependant === undefined) {
  //         console.log(item, "undefined");
  //         call(item.endpoints.getter.url, item.endpoints.getter.method).then(
  //           (data) => {
  //             item.setter(data);
  //           }
  //         );
  //       }

  //       else {

  //         content.countries.map((country) => {
  //           console.log(item, "defined");
  //           call(
  //             `${item.endpoints.getter.url}/${country}`,
  //             item.endpoints.getter.method
  //           ).then((data) => {

  //             item.dependant[`${country}`] = data
  //             console.log(item.dependant)
  //             item.setter(['TEST'])
  //             // item.setter((prev) => [
  //             //   ...prev,
  //             //   { country: country, regions: data },
  //             // ]);
  //           });
  //         });
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     console.log(stateManager, "ROLLLEEEE");
  //   }, [region]);
}

export default Main;
