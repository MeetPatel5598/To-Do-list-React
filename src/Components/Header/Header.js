import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
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
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            <LinkContainer to="/aboutus">
                <Nav.Link>About US</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav>
            <Navbar.Brand>MEET PATEL</Navbar.Brand>
          </Navbar>
        )
    }
}

export default Header;