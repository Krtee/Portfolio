import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation(props) {
    return (
        <Navbar fixed={'top'} bg="dark" expand="lg" variant={'light'} className="navigation">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className={"ml-auto"} id={"navigationItems"}>
                    <Nav.Link activeClass="active"
                              className="link" to={'/'}>
                        Home
                    </Nav.Link>
                    <Nav.Link activeClass="active"
                              to={'/about'}
                              className="link">
                        About
                    </Nav.Link>
                    <Nav.Link href={'/about/projects'}>
                        Projects
                    </Nav.Link>
                    <Nav.Link href={'/about/contact'}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;