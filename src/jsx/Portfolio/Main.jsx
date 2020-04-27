import React, {Component, useRef} from "react";
import Header from "./Header";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Contact from "./Contact";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch";
import '../../scss/index.scss';
import '../../scss/nav.scss';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {HashLink as Link} from 'react-router-hash-link';
import HashRouter from "react-router-dom/modules/HashRouter";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";


class Main extends Component {
    constructor(props) {
        super(props);

        this.contact = React.createRef()
    }


    render() {
        return (
            <div>
                <div className={'background'}>
                    <P5Wrapper sketch={sketch}></P5Wrapper>
                </div>
                <Navbar fixed={'top'} bg="dark" expand="lg" variant={'light'} className="navigation">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className={"ml-auto"} id={"navigationItems"}>
                            <Nav.Link className="link" id="homelink">
                                Home
                            </Nav.Link>
                            <Nav.Link className="link" href={""}>
                                About
                            </Nav.Link>
                            <Nav.Link className="link">
                                Projects
                            </Nav.Link>
                            <Nav.Link className="link" id="contactlink">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <HashRouter>
                    <Header></Header>
                    <Timeline></Timeline>
                    <Skills></Skills>
                    <Contact ref={this.contact}></Contact>
                </HashRouter>
            </div>
        );
    }
}

export default Main;
