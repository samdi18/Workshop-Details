import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='flex flex-jc-sb flex-ai-c'>
        <a href='#' className='header__logo'>
          <img src={require('../../assets/logo.png')} alt='' />
        </a>

        <div className='header__rightnav flex flex-jc-sb flex-ai-c'>
          <div className='header__links'>
            <a href='#'>Home</a>
            <a href='#'>Workshops</a>
            <a href='#'>Consultancy</a>
            <a href='#'>Video Lessons</a>
            <a href='#'>Blog</a>
            <a href='#'>Earn with upskill</a>
          </div>

          <a href='#' className='header__cta'>
            Sign in
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
