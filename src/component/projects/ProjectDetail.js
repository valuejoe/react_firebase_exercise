import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetail = (props) => {
  const{ project, auth } = props;
  if(!auth.uid) return <Redirect to='/signIn' />

  if(project){
    return(
      <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ project.title }</span>
          <p>{ project.content }</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by {project.authFirstName} {project.authLastName}</div>
          <div>{moment(project.createAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
    )
  }else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.project;
  const project = projects ? projects[id] : null;
  return{
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'project'}
  ])
)(ProjectDetail)
