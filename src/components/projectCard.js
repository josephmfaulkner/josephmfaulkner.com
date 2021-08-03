import * as React from "react";
import Nav from 'react-bootstrap/Nav';

const ProjectCard = (props) => {
  const projectData = props.projectData;
  return (
    <div className="col">
        <div className="card shadow-sm">

              



            <div className="card-body">

                <h5 className="card-text text-center">{projectData.title}</h5>

              <img
                  className="projectImage"
                  src={projectData.image_url}
                  alt={projectData.description}
                  placeholder="blurred"
                  layout="fixed"
                  width="100%"
                />
                <p className="card-text">{projectData.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group projectCardButtons">
                  <Nav.Link title="Demo" className="btn btn-md btn-outline-secondary" href={projectData.demo_link} target="_blank"> 
                    <i className="fas fa-laptop-code"></i>
                  </Nav.Link>
                  <Nav.Link title="Source code" className="btn btn-md btn-outline-secondary" href={projectData.code_link} target="_blank">
                    <i className="fab fa-git-alt"></i>
                  </Nav.Link>
                </div>
                <small className="text-muted">{projectData.tech_used}</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
