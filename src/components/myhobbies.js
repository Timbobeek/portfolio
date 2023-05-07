import React from 'react';
import './myhobbies.css';
import stang from '../images/hobbies/stang.jpg';
import badminton from '../images/hobbies/badminton.jpg';
import football from '../images/hobbies/football.jpg';
import guitar from '../images/hobbies/guitar.webp';
import gym from '../images/hobbies/gym.jpg';
import language from '../images/hobbies/language.jpg';
import movies from '../images/hobbies/movies.png';
import pool from '../images/hobbies/pool.jpg';
import pubg from '../images/hobbies/pubg.jpg';
import twitch from '../images/hobbies/twitch.png';

const Hobbies = () => {


  return(
    <div className='hobbiesPage'>
      {/* <span className='hobbiesTitle'>My Hobbies</span> */}
      <div className="wrapper">
        <div className="image" id='img1'>
          <img src={stang} alt="driving"/>
          <div className="description">
            <p>Traveling by car gives me a lot of joy - some day I will be doing it in a '65 Mustang</p>
          </div>
        </div>
        <div className="image" id='img2'>
          <img src={language} alt="languages"/>
          <div className="description">
            <p>🤓Fluent in Russian/English, can converse in Ukrainian, learning Spanish and German</p>
          </div>
        </div>
        <div className="image" id='img3'>
          <img src={badminton} alt="badminton"/>
          <div className="description">
            <p>Badminton is a great alternative to my favorite sport of football ⚽ </p>
          </div>
        </div>
        <div className="image" id='img4'>
          <img src={guitar} alt="guitar"/>
          <div className="description">
            <p>Not very good at it, but when I play, my soul rests</p>
          </div>
        </div>
        <div className="image" id='img5'>
          <img src={football} alt="football"/>
          <div className="description">
            <p>Football is the love of my life ❤️ </p>
          </div>
        </div>
        <div className="image" id='img6'>
          <img src={gym} alt="gym"/>
          <div className="description">
            <p>Bench press? Deadlift? Pull-ups? Squats? Bicep curls? Yes!</p>
          </div>
        </div>
        <div className="image" id='img7'>
          <img src={movies} alt="movies"/>
          <div className="description">
            <p>Having worked at a movie theatre for 6 years, it is impossible to not love cinema</p>
          </div>
        </div>
        <div className="image" id='img8'>
          <img src={pool} alt="billiard"/>
          <div className="description">
            <p>One of my most recent hobbies, I call it "chess for cool people"</p>
          </div>
        </div>
        <div className="image" id='img9'>
          <img src={pubg} alt="pubg"/>
          <div className="description">
            <p>I hate this game (2k+ hours)</p>
          </div>
        </div>
        <div className="image" id='img10'>
          <img src={twitch} alt="twitch"/>
          <div className="description">
            <p>Can watch a major, can watch a dude with 2 views (I tried streaming once)</p>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Hobbies;