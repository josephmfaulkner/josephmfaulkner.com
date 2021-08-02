import * as React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialMediaLinks from "./socialMediaILinks";

// markup
const NavBar = (props) => {

  return (
    <Navbar className="top-navbar" bg="dark" variant="dark" sticky="top">
        <Container

        >
            <Nav

            >
                <Nav.Item>
                    <Nav.Link href="/#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Resume.pdf" target="_blank">Resume</Nav.Link>
                </Nav.Item>
            </Nav>

            <SocialMediaLinks className="justify-content-end social-navbar-top d-none d-md-flex d-lg-flex d-xl-flex" />
        
        </Container>
        

    </Navbar>
  )
}

export default NavBar;
