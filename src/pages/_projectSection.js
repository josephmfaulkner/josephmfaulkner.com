import * as React from "react"

import Container from 'react-bootstrap/Container';
import ProjectCard from "../components/projectCard";

// markup
const ProjectSection = () => {
  return (
    <div id="projects">

      <Container className="home-page-content">
        <h1 className="display-4 fw-normal">Projects</h1>
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>

      </Container>
    </div>
  )
}

export default ProjectSection;
