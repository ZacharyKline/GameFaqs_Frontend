import React from "react";
import {Navbar, Nav} from 'react-bootstrap'

class Header extends React.Component{
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">Game Faqs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/boards">Top 10</Nav.Link>
          <Nav.Link href="/faqs">Faqs</Nav.Link>
          <Nav.Link href="/conribution">Contribute</Nav.Link>
          <Nav.Link href="/games">Games</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
            </React.Fragment>
        )
    }}
    

export default Header

