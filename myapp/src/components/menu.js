import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
function Menu(){
  return<>
  <Navbar bg="danger" variant="dark">
    <Container>
      <Navbar.Brand to="/"><img className="logo-menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo pokemon"></img></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/pokemon">Pokemon</Nav.Link>
        <Nav.Link href="/pokedex">Pokedex</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
}



export default Menu;