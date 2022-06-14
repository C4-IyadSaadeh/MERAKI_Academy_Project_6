import React from 'react'
import { Col, Row,Navbar,Container,Nav,Offcanvas,Form,Button,NavDropdown,FormControl } from "react-bootstrap";
import {IoPersonCircleSharp} from 'react-icons/io5'

import { Routes, Route, Link, useNavigate } from "react-router-dom";
export default function HeaderOne() {
  const navigate = useNavigate();

  return (
    <div>
        <Navbar bg="black"  expand='md' fixed='top'>
  <Container fluid>
    <Navbar.Brand  style={{color: '#ff1212',fontSize: 'x-large',fontStyle: 'italic',fontWeight: '600'}}>NETFLIX</Navbar.Brand>
    <Nav className="justify-content-start flex-grow-1 pe-3" >
          
          
          

          
        </Nav>
        <Nav className="justify-content-end  pe-3" >
        
        <Nav.Link style={{color: 'white'}} onClick={()=>{
          navigate('/Login')
          
        }}>Sign In</Nav.Link>

        </Nav>
    <Navbar.Toggle  aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
      scroll="true"
      bg="dark"
    >
      
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </div>
  )
}
