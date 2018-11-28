import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignInLink = (props) => {
  return(
    <ul className="right">
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={props.signOut}>Log Out</NavLink>
      </li>
      <li>
        <NavLink to='/' className="btn btn-floating pink lighten-1">Joe</NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignInLink);