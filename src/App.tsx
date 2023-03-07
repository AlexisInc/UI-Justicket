import * as React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Navbar bg="white" variant="wight">
     
    <Container>
      <Nav className="me-auto">
       <Nav.Link href="#home"><span>Mes billets</span></Nav.Link>
        <Nav.Link href="#admin"><span id="center">Administration</span></Nav.Link>
        <Nav.Link href="#features"><span>Concerts</span></Nav.Link>
      </Nav>
      <img src="/images/logo.png"/>

    </Container>
  </Navbar>


  );
}



export default App;
