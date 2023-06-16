import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <>
            <NavLink to='/create-fishing-spot' className='navbar--navlink'>Create</NavLink>
            <ProfileButton user={sessionUser} />
        </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className='navbar--navlink navbar-signup--navlink'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar__main--div'>
        <Link exact to="/home" className='navbar--site-title--link'>
            <h4 className='navbar--site-title-h4'>On-Hook 🎣</h4>
        </Link>
        <div className='navbar--navlinks-div'>
            <NavLink exact to="/home" className='navbar--navlink'>Home</NavLink>
            {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
