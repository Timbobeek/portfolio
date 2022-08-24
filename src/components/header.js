import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return(
      <header>
          <div className='header-left'>
            <div class="small-screen">Timofey Goloshchapov</div>
            <div id="pillar">

              <div class="row">
                <div class="wrap">
                  <div class="left">Timofey Goloshchapov</div>
                  <div class="right">have fun pronouncing my name 😁😁😁😁</div>  
                </div>
              </div>
            </div>
          </div>
          
          <div className='small-screen-menu'>
            <div className='small-screen-menu-one'>
              <div className='menuOption'><Link to="/">Home</Link></div>
              <div className='menuOption'><Link to="projects">Projects</Link></div>
            </div>
            <div className='small-screen-menu-two'>
              <div className='menuOption'><Link to="resume">Resume</Link></div>
              {/* <div className='menuOption'><Link to="accomplishments">Accomplishments</Link></div> */}
              <div className='menuOption'><Link to="hobbies">My Hobbies</Link></div>
            </div>
          </div>
          
          <div className='header-right'>
            <div className='menuOption'><Link to="/">Home</Link></div>
            <div className='menuOption'><Link to="projects">Projects</Link></div>
            <div className='menuOption'><Link to="resume">Resume</Link></div>
            {/* <div className='menuOption'><Link to="accomplishments">Accomplishments</Link></div> */}
            <div className='menuOption'><Link to="hobbies">My Hobbies</Link></div>
          </div>
      </header>
  );
}

export default Header;