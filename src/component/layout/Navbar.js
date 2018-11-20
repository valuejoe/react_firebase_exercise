import React from 'react';
import {Link} from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const Navbar = () => {
  return(
    <nav className="nav-wrapper grey darkness-3">
      <div className="container">
        <Link to='/' className="brand-logo">HaHaApp</Link>
        <SignInLink />
        <SignOutLink />
      </div>
    </nav>
  )
}

export default Navbar;