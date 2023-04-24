import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import Home from './Home';
import AllAdds from './AllAdds';
import About from './About';
import Catagory from './Catagory';


export default class NavBar extends Component {
  render() {
    return (
      <Router>
      <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Container>
        <Navbar.Brand href="#home">SL BookShare</Navbar.Brand>        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/catagories"}>Catagories</Nav.Link>
            <Nav.Link as={Link} to={"/allAdds"}>All Adds</Nav.Link>
            <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
            <Nav.Link as={Link} to={"/aboutus"}>About Us</Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}>Contacts</Nav.Link>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
           </Nav>
          <Nav>
            <Nav.Link href="#deets">Chats</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> Notifcations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Container>
      </Navbar>

      </div>

      <div>
        {/* <Switch>
        <Route exact path="/"> 
           <Home />
        </Route>
         <Route path="/about">
            <About/>
        </Route>
        <Route path="/alladds">
             <AllAdds />
        </Route>
        <Route path="/catagory">
             <Catagory />
        </Route>        
        </Switch> */}

      </div>


      </Router>
    )
  }
}


