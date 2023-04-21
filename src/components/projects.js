import React from "react";
import './projects.css';
// import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="container">
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg" alt="project_one" />
        <div className="card__head">
          Project One Title
          <div className="p2">Link</div>
          <div className="p3">Description</div>
        </div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg" alt="project_two" />
        <div className="card__head">Angry Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG" alt="project_three" />
        <div className="card__head">Curious Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg" alt="project_four" />
        <div className="card__head">Prowling Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg" alt="project_five" />
        <div className="card__head">Sleepy Cat</div>
      </div>
    </div>
  );
};

export default Projects;
