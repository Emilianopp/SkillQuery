import { Dropdown } from "react-bootstrap";
import call from "components/api/call";
import React, { useEffect } from "react";


function NonDependantDropdowns({ menuContent }) {

  return (
    <div>
      {menuContent?.map((searchKey) => (
        <Dropdown
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
          <Dropdown.Toggle id="dropdown-basic">{searchKey.sel}</Dropdown.Toggle>
          <Dropdown.Menu>
          
            {searchKey.state?.map((item) => (
              <Dropdown.Item key={item} eventKey={item}>
                
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </div>
  );
}

export default NonDependantDropdowns;
