import * as React from "react"

import Container from 'react-bootstrap/Container';

// markup
const AboutSection = () => {
  return (
    <div id="about" className="section">

      <Container className="home-page-content">
        <h1 className="display-4 fw-normal">Howdy,</h1>
        <p>
        I have over five years of professional experience developing and maintaining software systems that store, retrieve and process business information. 
        <br></br>
        As a Fullstack Software Developer, I have been responsible for supporting service-desk which has given me extensive experience interacting with users to diagnose and resolve software errors. I have also coordinated with Business Analysts and software users to develop and implement solutions that meet the needs of the company.
        I don’t have a particular goal with this website. I just wanted a place to show off my stuff. 
        Hope you enjoy exploring my work.  
        </p>
      </Container>

    </div>
  )
}

export default AboutSection;
