import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const Header = () => {
  return(
      <header>
          <div className='header-left'>
            <div className="small-screen">Timofey Goloshchapov</div>
            <div id="pillar">
              <div className="row">
                <div className="wrap">
                  <div className="left">Timofey Goloshchapov</div>
                  <div className="right">have fun pronouncing my name 😁😁😁😁</div>  
                </div>
              </div>
            </div>
          </div>

          <div className='header-right'>
            <div className='menuOption'><Link to="/">Home</Link></div>
            <div className='menuOption'><Link to="projects">Projects</Link></div>
            <div className='menuOption'><Link to="resume">Resume</Link></div>
            <div className='menuOption'><Link to="hobbies">My Hobbies</Link></div>
          </div>
          
          <div className='small-screen-menu'>
            <div className='title'>Timofey Goloshchapov</div>
            <div className='burger'>
              <a href="#" className="icon" onClick={myFunction}>
                <i className="fa fa-bars fa-lg"></i>
              </a>
            </div>
            <div id="myLinks">
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/hobbies">My Hobbies</a>
            </div>
          </div>
      </header>
  );
}

export default Header;