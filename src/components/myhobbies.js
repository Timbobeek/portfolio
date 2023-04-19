import React from 'react';
import './myhobbies.css';

const Hobbies = () => {


  return(
    <div className='hobbiesPage'>
      <span className='hobbiesTitle'>My Hobbies</span>
      <div className="wrapper">
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?water" alt=""/>
          <div className="description">
            <p>I like water a lot!!!!</p>
          </div>
        </div>
        <div className="image" id='img2'>
          <img src="https://source.unsplash.com/random/600x600?summer" alt=""/>
          <div className="description">
            <p>summer is dope</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?plants" alt=""/>
          <div className="description">
            <p>plantssssss</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?snow" alt=""/>
          <div className="description">
            <p>snowyyyyy</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?roses" alt=""/>
          <div className="description">
            <p>roses are red</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?sky" alt=""/>
          <div className="description">
            <p>sky is meh</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?nature" alt=""/>
          <div className="description">
            <p>nature is natural</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?blossom" alt=""/>
          <div className="description">
            <p>blossomy blossom</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?ice" alt=""/>
          <div className="description">
            <p>ice babyyyyy</p>
          </div>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/random/600x600?spring" alt=""/>
          <div className="description">
            <p>spring is allergic</p>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Hobbies;