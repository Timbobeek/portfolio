import React from "react";
import './projects.css';

var words = ['Projects', 'Проекты', 'Proyectos', 'Проекти', 'Projekte', 'Իմ պրոյեկտները'],
    part = '',
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

  function setText() {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }

    const effectivePart = part ? part : "&nbsp;"

    document.getElementById('projectsTitle').innerHTML = effectivePart;
  }

const Projects = () => {

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText();
    }, speed);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
  <div>

    <span id='projectsTitle' className="projectsTitle"></span>

    <div className="container">
      <div className="card" id='project1'>
        <div className="card__head">
          <div className='p1'>Data Persistence Project</div>
          <div className="p3">One of the toughest Backend assignments I have worked on at BloomTech: involves SQL, multi-table queries, data modeling.</div>
          <a href='https://github.com/Timbobeek/web-sprint-challenge-adding-data-persistence' className="p2" target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
      </div>
      
      <div className="card" id='project2'>
        <div className="card__head">
          <div className='p1'>A Bit Of Robotics</div>
          <div className="p3">In this project, I have written code in Arduino (a C++ variant) to make a robot perform various actions on voice command. Fun times!</div>
          <a href='https://github.com/Timbobeek/Arduino-Voice-Recognition-Project-2.0' className="p2" target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
      </div>
  
      <div className="card" id='project3'>
        <div className="card__head">
          <div className='p1'>Mock Marketplace Website</div>
          <div className="p3">I designed most of this Amazon/Ebay/Craigslist mock and was responsible for the home and listings pages. Also done at BloomTech, my first serious group project!</div>
          <a href='https://github.com/african-marketplace-dec2021/frontend' className="p2" target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
      </div>
  
      <div className="card" id='project4'>
        <div className="card__head">
          <div className='p1'>Mock Recipe Website</div>
          <div className="p3">A web page made for saving recipes online, where I worked on (you guessed it!) the component responsible for saving recipes on the site.</div>
          <a href='https://github.com/Build-Week-Secret-Family-Recipes-01/front-end' className="p2" target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
      </div>
  
      <div className="card" id='project5'>
        <div className="card__head">
          <div className='p1'>A Registration Page</div>
          <div className="p3">As a part of BloomTech bootcamp program, I made the UX/Frontend of one of the registration pages for a children's coding school.</div>
          <a href='https://github.com/BloomTech-Labs/coder-heroes-fe/pull/234' className="p2" target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
      </div>
    </div>
  
  </div>
  );
};

export default Projects;
