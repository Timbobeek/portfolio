import React from "react";
import "./projects.css";
import setAnimationInterval from "./headAnimation";

const Projects = () => {
  React.useEffect(() => {
    const interval = setAnimationInterval("projectsTitle", [
      "Projects",
      "Проекты",
      "Proyectos",
      "Проекти",
      "Projekte",
      // "Իմ պրոյեկտները",
    ]);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hobbiesPage">
      <div className="container-title">
        <span id="projectsTitle" className="projectsTitle"></span>
      </div>

    <div className="container">
        <div className="card" id="project1">
          <div className="card__head">
            <div className="p1">Psychotherapist Website</div>
            <div className="p3">
              This project has two pieces: a website written in TypeScript 
              and a Content Management System page that allows the page owner to edit all of the content on the website in real time using Sanity. 
            </div>
              <a
                href="https://chamisamackenzielmsw.com/"
                className="p2"
                target="_blank"
                rel="noreferrer"
              >
                Website 
              </a>
          </div>
        </div>

        <div className="card" id="project2">
          <div className="card__head">
            <div className="p1">A Bit Of Robotics</div>
            <div className="p3">
              In this project, I have written code in Arduino (a C++ variant) to
              make a robot perform various actions on voice command. Fun times!
            </div>
            <a
              href="https://github.com/Timbobeek/Arduino-Voice-Recognition-Project-2.0"
              className="p2"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card" id="project3">
          <div className="card__head">
            <div className="p1">Local Business Website</div>
            <div className="p3">
              My current job where I maintain and enhance a labor analysis app for a local firm <a className="betonLink" target="_blank"
                rel="noreferrer" href="https://aaconcreteinc.com/">All American Concrete Inc. </a>
              In over a year, I’ve made significant progress as a software engineer while working on this project.
              I’ve improved the labor data analysis mechanisms, built responsive pages, worked within an Electron app, resolved backend issues, and much more.
              Unfortunately, I can’t share links to the repository or the product due to privacy constraints, but feel free to ask me about it!
            </div>
          </div>
        </div>

        <div className="card" id="project4">
          <div className="card__head">
            <div className="p1">FutbolSurvey</div>
            <div className="p3">
              A page dedicated to football (soccer) enthusiasts.  This project features Auth0 for authentication and has helped me improve my backend skills.
              The current version is built with JavaScript and CSS, while the newer WIP version uses TypeScript, TailwindCSS, and shadcn.
              Working on this project allows me to explore new technologies in a setting I enjoy - football.
            </div>
            <div className="projectLinks">
              <a
                href="https://github.com/Timbobeek/FutbolSurvey"
                className="p2"
                target="_blank"
                rel="noreferrer"
              >
                v1GitHub
              </a>
              <a
                href="https://futbolsurvey.com/"
                className="p2"
                target="_blank"
                rel="noreferrer"
              >
                v1Website 
              </a>
              <a
                href="https://github.com/Timbobeek/ultrafreshproject"
                className="p2"
                target="_blank"
                rel="noreferrer"
              >
                v2GitHub
              </a>
              <a
                href="https://futbol-survey-ultra.vercel.app/"
                className="p2"
                target="_blank"
                rel="noreferrer"
              >
                v2Demo 
              </a>
            </div>
          </div>
        </div>

        <div className="card" id="project5">
          <div className="card__head">
            <div className="p1">WeTranslate Page</div>
            <div className="p3">
              My personal work-in-progress project: a page with translations of song lyrics 
              and other forms of art. Typescript + Sanity again.
            </div>
            <div className="projectLinks">
              <a
                href="https://github.com/Timbobeek/PerevodSite"
                className="p2"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://we-translate.vercel.app/"
                className="p2"
                target="_blank"
                rel="noreferrer"
              >
                Website 
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
