import React from 'react';
import './myhobbies.css';

const Hobbies = () => {
  return(
    <div className='hobbiesPage'>
      <span className='hobbiesTitle'>My Hobbies</span>
      <div class="wrapper">
        <img className='imgOne' src="https://source.unsplash.com/random/600x600?water" alt=""/>
        <img className='imgTwo' src="https://source.unsplash.com/random/600x600?summer" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?plants" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?snow" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?roses" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?sky" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?nature" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?blossom" alt=""/>
        <img src="https://source.unsplash.com/random/600x600?ice" alt=""/>
        <img className='imgLast' src="https://source.unsplash.com/random/600x600?spring" alt=""/> 
      </div>
    </div>
  );
}

export default Hobbies;