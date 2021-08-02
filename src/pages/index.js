import * as React from "react"

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import MainTemplate from "../components/_mainTemplate";
import HeaderSection from "./_headerSection";
import AboutSection from "./_aboutSection";
import ProjectSection from "./_projectSection";


// markup
const IndexPage = () => {
  return (
    <MainTemplate>
      <HeaderSection />
      <AboutSection />
      <ProjectSection />

    </MainTemplate>
  )
}

export default IndexPage
