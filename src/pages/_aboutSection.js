import * as React from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// markup
const AboutSection = () => {
  return (
    <div id="about" className="section">

      <Container className="home-page-content">
        <Row className="justify-content-center">
          <Col xs={{span: 6, order: 1}} md={{span: 6, order: 1}}  lg={{span: 4, order: 1}}  xl={{span: 3, order: 1}} >
              <img src="/images/profile-2.png" className="img-thumbnail z-depth-2" alt="Joseph Faulkner"/>
          </Col>  
          <Col xs={{span: 12, order: 0}} md={{span: 6, order: 0}} lg={{span: 4, order: 0}} xl={{span: 4, order: 0}}>
              <h1 className="display-4 fw-normal">Howdy,</h1>
              <p>
              I have over five years of professional experience developing and maintaining software systems that store, retrieve and process business information. 
              <br></br>
              As a Fullstack Software Developer, I have been responsible for supporting service-desk which has given me extensive experience interacting with users to diagnose and resolve software errors. I have also coordinated with Business Analysts and software users to develop and implement solutions that meet the needs of the company.
              I don’t have a particular goal with this website. I just wanted a place to show off my stuff. 
              Hope you enjoy exploring my work.  
              </p>
          </Col>
        </Row>  
      </Container>

    </div>
  )
}

export default AboutSection;
