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
          
          <div className='small-screen-menu'>

            {/* <div className='small-screen-menu-one'>
              <div className='menuOption'><Link to="/">Home</Link></div> */}
              {/* <div className='menuOption'><Link to="projects">Projects</Link></div> */}
              {/* <div className='menuOption'>Projects</div>
            </div> */}

            {/* <div className='small-screen-menu-two'>
              <div className='menuOption'><Link to="resume">Resume</Link></div> */}
              {/* <div className='menuOption'><Link to="accomplishments">Accomplishments</Link></div> */}
              {/* <div className='menuOption'><Link to="hobbies">My Hobbies</Link></div> */}
              {/* <div className='menuOption'>My Hobbies</div> */}
            {/* </div> */}

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className='title'>Timofey Goloshchapov</div>

            <div className='burger'>
              <div id="myLinks">
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
              <a href="#" className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
            
          </div>
          
          <div className='header-right'>
            <div className='menuOption'><Link to="/">Home</Link></div>
            {/* <div className='menuOption'><Link to="projects">Projects</Link></div> */}
            <div className='menuOption'>Projects</div>
            <div className='menuOption'><Link to="resume">Resume</Link></div>
            {/* <div className='menuOption'><Link to="accomplishments">Accomplishments</Link></div> */}
            <div className='menuOption'><Link to="hobbies">My Hobbies</Link></div>
            {/* <div className='menuOption'>My Hobbies</div> */}
          </div>

      </header>
  );
}

export default Header;