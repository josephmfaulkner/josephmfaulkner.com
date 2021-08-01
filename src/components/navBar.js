import * as React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialMediaLinks from "./socialMediaILinks";

// markup
const NavBar = (props) => {

  return (
    <Navbar bg="dark" variant="dark">
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

            <SocialMediaLinks className="justify-content-end social-navbar-top" />
        
        </Container>
        

    </Navbar>
  )
}

export default NavBar;
