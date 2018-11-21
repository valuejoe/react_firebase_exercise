import React from 'react'

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Contect</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Joe</div>
          <div>21 November, 4pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
