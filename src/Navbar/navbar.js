import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css'

export default class NavbarComp extends Component {
    render() {

        return (
            <>
                <Container fluid>
                    <Navbar collapseOnSelect fixed="top" sticky="top" expand="lg" >
                        <Navbar.Brand >


                            Malaria Predictor

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav >
                                <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">
                                    Home
                                </Nav.Link>

                                <Nav.Link eventKey={2} componentClass={Link} href="/demo" to="/demo">
                                    Demo
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </>
        );
    }

}


