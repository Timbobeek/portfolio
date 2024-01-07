import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import flyer from "../images/flyer.png"


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const Header = () => {
  const [isDialogShown, setShowDialog] = useState(false);

  useEffect(() => {
    const dialog = document.querySelector("#modal");
    if (!dialog) {
      return
    }

    if (isDialogShown) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isDialogShown])

  return (
    <header>
      <div className="header-left">
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

      <div className="header-right">
        <div className="menuOption">
          <Link to="/">Home</Link>
        </div>
        <div className="menuOption">
          <Link to="projects">Projects</Link>
        </div>
        <div className="menuOption">
          <Link to="contacts">Contacts</Link>
        </div>
        <div className="menuOption">
          <Link to="hobbies">My Hobbies</Link>
        </div>
        <div className="menuOption">
          {/* <button id="openModal" onClick={() => setShowDialog(true)}>Hire Me?</button> */}
          {/* <Link onClick={() => setShowDialog(true)}>Hire Me?</Link> */}
          
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" id='hireMe' onClick={() => setShowDialog(true)}>Hire Me?</a>
        </div>

        <dialog id="modal" className="modal" onClose={() => setShowDialog(false)}>
          {/* <button id="closeModal" onClick={() => setShowDialog(false)} className="modal-close-btn"/> */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
          <a id="closeModal" href="#" onClick={() => setShowDialog(false)} />
          <img className="flyer" src={flyer} alt="flyer"/>
        </dialog>

      </div>

      <div className="small-screen-menu">
        <div className="title">Timofey Goloshchapov</div>

        <div className="burger">
          <a href="#" className="icon" onClick={myFunction}>
            <i className="fa fa-bars fa-lg"></i>
          </a>
        </div>
        <div id="myLinks">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/contacts">Contacts</a>
          <a href="/hobbies">My Hobbies</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
