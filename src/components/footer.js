import * as React from "react"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SocialMediaLinks from "./socialMediaLinks";


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
