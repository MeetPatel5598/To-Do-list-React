import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import '../Header/Header.css';

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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
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
            <i>Owner: &nbsp;</i>
            <Navbar.Brand>MEET PATEL</Navbar.Brand>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Header;