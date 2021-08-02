import * as React from "react"

import Container from 'react-bootstrap/Container';
import ProjectCard from "../components/projectCard";

import { useStaticQuery, graphql } from "gatsby";

// markup
const ProjectSection = () => {

  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson(sort: {order: ASC, fields: order_id}) {
        edges {
          node {
            title
            description
            code_link
            demo_link
            tech_used
            image_url
            order_id
          }
        }
      }
    }
  `);

  return (
    <div id="projects">

      <Container className="home-page-content">
        <h1 className="display-4 fw-normal">Projects</h1>
        
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">

          {
            data.allProjectsJson.edges.map((project, index) => {
              return (<ProjectCard projectData={project.node} key={index} />);
            })
          }

        </div>

      </Container>
    </div>
  )
}

export default ProjectSection;
