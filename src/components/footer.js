import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import github from "../images/github.png";
import linkedinBlk from "../images/linkedinBlk.png"

const Footer = () => {
  return (
    <footer>
        <div className="git">
          <a
            href="https://github.com/Timbobeek"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} width="40" height="40" alt="logo" />
          </a>
        </div>
        <div className="lin">
          <a
            href="https://www.linkedin.com/in/timofey-goloshchapov/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinBlk} width="48" height="48" alt="logo" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
