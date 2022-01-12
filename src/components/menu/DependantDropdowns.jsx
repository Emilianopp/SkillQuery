import { Col, Dropdown } from "react-bootstrap";
import call from "components/api/call";
import React, { useEffect } from "react";
import { css } from "@emotion/css";

function DependantDropdowns({ searchKey ,styles}) {
  useEffect(()=> {
    searchKey.setterSelection(searchKey.default)
  },[searchKey.depedencySelection])


  return (
    <>
    <p style = {styles.dropdownTitle}> {searchKey.title}</p>

        <Dropdown
          style = {styles.dropdownCont}
          id={searchKey.id}
          tittle={searchKey.default}
          onSelect={(data) => {
            call(
              `${searchKey.endpoints.setter.url}/${data}`,
              searchKey.endpoints.setter.method
            );
            searchKey.setterSelection(data);
          }}
        >
          <Dropdown.Toggle className={css( styles.dropdown)} id="dropdown-basic">{searchKey.sel}</Dropdown.Toggle>
          <Dropdown.Menu style ={styles.dropdownMenu}>
            {searchKey.state[searchKey.depedencySelection]?.map((item) => (
              <Dropdown.Item  key={item} eventKey={item}>
                {" "}
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>{" "}
        </Dropdown>
      
   </>
  );
}

export default DependantDropdowns;
