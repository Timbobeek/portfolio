import React from "react";
import './projects.css';
// import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="container">
      <div className="card" id='project1'>
        <div className="card__head">
          <div className='p1'>Project One Title</div>
          <div className="p2">Link</div>
          <div className="p3">Description</div>
        </div>
      </div>
      
      <div className="card" id='project2'>
        <div className="card__head">
          <div className='p1'>Project Two Title</div>
          <div className="p2">Link</div>
          <div className="p3">Description</div>
        </div>
      </div>
  
      <div className="card" id='project3'>
        <div className="card__head">
          <div className='p1'>Project Three Title</div>
          <div className="p2">Link</div>
          <div className="p3">Description</div>
        </div>
      </div>
  
      <div className="card" id='project4'>
        <div className="card__head">
          <div className='p1'>Project Four Title</div>
          <div className="p2">Link</div>
          <div className="p3">Description</div>
        </div>
      </div>
  
      <div className="card" id='project5'>
        <div className="card__head">
          <div className='p1'>Project Five Title</div>
          <div className="p2">Link</div>
          <div className="p3">Description</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
