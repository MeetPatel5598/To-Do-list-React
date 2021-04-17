import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
            <Nav className="mr-auto">
            <LinkContainer to="/taketest">
                <Nav.Link>About US</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/taketest">
                <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav>
            <Navbar.Brand>MEET PATEL</Navbar.Brand>
          </Navbar>
        )
    }
}

export default Header;