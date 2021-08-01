import * as React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialMediaLinks from "./socialMediaILinks";


// markup
const Footer = (props) => {
  return (
    <Navbar bg="dark" variant="dark" >
        <Container className="justify-content-center" >

            <SocialMediaLinks className="social-navbar-bottom" />

        </Container>
    </Navbar>
  )
}

export default Footer;