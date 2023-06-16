import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <button className='navbar__profile--btn' onClick={openMenu}>
        <i className="fas fa-user-circle fa-lg" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="profile-dropdown-content">{user.username}</div>
          <div className="profile-dropdown-content">{user.email}</div>
          <div>
            <div className='profile__dropdown__logout--btn' onClick={logout}>Log Out</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
