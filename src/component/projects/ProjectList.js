import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {/* 如果有projects則執行projects.map() */}
      {projects && projects.map(project => {
        return(
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ProjectList