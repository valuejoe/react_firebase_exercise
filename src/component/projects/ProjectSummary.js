import React from 'react';
import moment from 'moment';

const ProjectSunnary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authFirstName} {project.authLastName}</p>
        <p className="grey-text">{moment(project.createAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}
export default ProjectSunnary;