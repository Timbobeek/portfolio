import React from "react";
import "./resume.css";
import setAnimationInterval from "./headAnimation";
import { Link } from "react-router-dom";

function popupTrigger() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  console.log('ddddddddddddddddddd')
}

const Resume = () => {
  React.useEffect(() => {
    const interval = setAnimationInterval("resumeTitle", [
      "Resume",
      "Резюме",
      "Currículum",
      "Резюме",
      "Resümee",
      "Իմ ռեզյումեն",
    ]);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    const interval = setAnimationInterval("contactMe", [
      "Got a project for me? Email me at",
      "У вас есть проект для меня? Напишите на",
      "У вас є проект для мене? Напишіть на"
    ]);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="resumeDiv">
      <span id="resumeTitle" className="resumeTitle">
        Resume
      </span>
      <a href="resume.pdf" download="Timofey Goloshchapov Resume">
        <button>PRESS TO DOWNLOAD</button>
      </a>
      <span id="contactMe" className="contactMe">
        Resume
      </span>
      <a className="email" href="mailto:tim.goloschapov@gmail.com">tim.goloschapov@gmail.com</a>

      <div class="popup" onClick={popupTrigger}>Click me!
        <span class="popuptext" id="myPopup">Popup text...</span>
      </div>
    </div>
  );
};

export default Resume;
