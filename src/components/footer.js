import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Footer = () => {
  return(
    <footer>
      <div className='footer-left'>
        <div className='git'>
          <a href = "https://github.com/Timbobeek" target="_blank" rel="noreferrer"><img src={github} width="40" height="40" alt='logo'/></a>
        </div>
        <div className='lin'>
          <a href = "https://www.linkedin.com/in/timofey-goloshchapov/" target="_blank" rel="noreferrer"><img src={linkedin} width="40" height="40" alt='logo'/></a>
        </div>
      </div>

      <div className='footer-right'>
            <div className='menuOption'><Link to="/">Home</Link></div>
            <div className='menuOption'><Link to="projects">Projects</Link></div>
            <div className='menuOption'><Link to="resume">Resume</Link></div>
            {/* <div className='menuOption'><Link to="accomplishments">Accomplishments</Link></div> */}
            <div className='menuOption'><Link to="hobbies">My Hobbies</Link></div>
      </div>
    </footer>
  );
}

export default Footer;