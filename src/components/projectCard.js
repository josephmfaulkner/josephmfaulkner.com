import * as React from "react"

const ProjectCard = (props) => {
  return (
    <div className="col">
        <div className="card shadow-sm">

            <img className="bd-placeholder-img card-img-top" src="https://via.placeholder.com/500/555555/000000" width="100%"  />

            <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-md btn-outline-secondary"><i className="fas fa-laptop-code"></i></button>
                    <button type="button" className="btn btn-md btn-outline-secondary"><i className="fab fa-git-alt"></i></button>
                </div>
                <small className="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
