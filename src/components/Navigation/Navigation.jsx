import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import content from "content/content.json"
export default function Navigation({setSubmit}) {
    let styles ={
        header: {
            fontSize: "40px",
            color: content.colors.green,
            
          },
        container: {
            padding: 0,
            margin: 0,
            paddingLeft: "5vw",
            
            
        }
    }
  return (
    <Navbar expand="lg">
    <Container fluid>
      <Navbar.Brand href="#Home" onClick ={()=>setSubmit(false)} style = {styles.header}> &#9745; SkillQuery</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link onClick ={()=>setSubmit(true)}  href="#Dashboard">Dashboard</Nav.Link>
         <Nav.Link href="https://github.com/Emilianopp/SkillQuery">Project Repository</Nav.Link> 
          
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

