import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return(
    <header>
      <div className='footer-left'>
        <div className='git'>
          <a href = "https://github.com/Timbobeek" target="_blank" rel="noreferrer"><img src = "github.png" width="30" height="30" alt='logo'/></a>
        </div>
        <div className='lin'>
          <a href = "https://www.linkedin.com/in/timofey-goloshchapov/" target="_blank" rel="noreferrer"><img src = "linkedin.png" width="30" height="30" alt='logo'/></a>
        </div>
      </div>
      <div className='headerANDfooter-right'>
            <div className='menuOption'><Link to="/">Home</Link></div>
            <div className='menuOption'><Link to="projects">Projects</Link></div>
            <div className='menuOption'><Link to="resume">Resume</Link></div>
            {/* <div className='menuOption'><Link to="accomplishments">Accomplishments</Link></div> */}
            <div className='menuOption'><Link to="hobbies">My Hobbies</Link></div>
      </div>
    </header>
  );
}

export default Footer;