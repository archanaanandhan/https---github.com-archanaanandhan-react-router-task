import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';




function topbar() {
 
  
  return <>

  <Navbar bg="light" data-bs-theme="light" >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto nav.link">
            <Nav.Link href="All" >All</Nav.Link>
            <Nav.Link href="FullStrackDevlopment">FullStrackDevlopment</Nav.Link>
            <Nav.Link href="DataScience">DataScience</Nav.Link>
            <Nav.Link href="CeyberSecurity">CeyberSecurity</Nav.Link>
            <Nav.Link href="Career">Career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default topbar