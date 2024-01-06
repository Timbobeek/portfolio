import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const modal = document.querySelector("#modal");
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");

if (modal) {
  openModal &&
    openModal.addEventListener("click", () => modal.showModal());
    console.log('hhhhh')

  closeModal &&
    closeModal.addEventListener("click", () => modal.close());
}


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const Header = () => {
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
        {/* <div className="menuOption">
          <p className="hire">Hire Me?</p>
        </div> */}
        <div className="menuOption">
          <button id="openModal">Hire Me?</button>
        </div>

        <dialog id="modal" class="modal">
          <button id="closeModal" class="modal-close-btn">Close</button>
          <p>...</p>
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
