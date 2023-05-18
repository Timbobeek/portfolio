import React from "react";
import "./resume.css";
import setAnimationInterval from "./headAnimation";

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

  return (
    <div className="resumeDiv">
      <span id="resumeTitle" className="resumeTitle">
        Resume
      </span>
      <a href="resume.pdf" download="Timofey Goloshchapov Resume">
        <button>PRESS TO DOWNLOAD</button>
      </a>
    </div>
  );
};

export default Resume;
