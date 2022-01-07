import { Col, Dropdown } from "react-bootstrap";
import call from "components/api/call";
import React, { useEffect } from "react";
import { css } from "@emotion/css";

function NonDependantDropdowns({ menuContent, styles }) {
  return (
    <>
      {menuContent?.map((searchKey) => (
        <>
          <p style = {styles.dropdownTitle}> {searchKey.title}</p>
          <Dropdown
            className={css(styles.dropdownCont)}
            id={searchKey.id}
            tittle={searchKey.default}
            drop={"down"}
            onSelect={(data) => {
              call(
                `${searchKey.endpoints.setter.url}/${data}`,
                searchKey.endpoints.setter.method
              );
              searchKey.setterSelection(data);
            }}
          >
            <Dropdown.Toggle className={css(styles.dropdown)}>
              {searchKey.sel}
            </Dropdown.Toggle>
            <Dropdown.Menu style={styles.dropdownMenu}>
              {searchKey.state?.map((item) => (
                <Dropdown.Item key={item} eventKey={item}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </>
      ))}
    </>
  );
}

export default NonDependantDropdowns;
