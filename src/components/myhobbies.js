import React from 'react';
import './myhobbies.css';

const Hobbies = () => {

  function showDescription() {
    var x = document.getElementById("text");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return(
    <div className='hobbiesPage'>
      <span className='hobbiesTitle'>My Hobbies</span>
      <div class="wrapper">
        <img className='imgOne' src="https://source.unsplash.com/random/600x600?water" alt=""/>
        <img className='imgTwo' src="https://source.unsplash.com/random/600x600?summer" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?plants" onMouseEnter={showDescription} onMouseLeave={showDescription} alt=""/>
        <img src="https://source.unsplash.com/random/600x600?snow" onMouseEnter={showDescription} onMouseLeave={showDescription} alt=""/>
        <img src="https://source.unsplash.com/random/600x600?roses" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?sky" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?nature" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?blossom" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?ice" alt=""/>
        <img className='imgLast' src="https://source.unsplash.com/random/600x600?spring" alt=""/>
      </div>
      <div className='textDiv'>
        <span id='text'>I like water a lot!!!!</span> 
      </div>
    </div>
  );
}

export default Hobbies;