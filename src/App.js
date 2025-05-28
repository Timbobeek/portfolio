import React from "react";
import "./App.css";
import homeface from './images/homeface.jpg';
import setAnimationInterval from "./components/headAnimation";

const App = () => {
  React.useEffect(() => {
    const interval = setAnimationInterval("welcomeText", [
      "Welcome",
      "Добро пожаловать",
      "Bienvenido",
      "Ласкаво просимо",
      "Willkommen",
      // "Բարի գալուստ",
    ]);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="homePage">
       <div id="welcomeText" className="welcomeText"></div>
      
       <div className="topHalf">
         <img className="homeImage" src={homeface} alt="picture of Tim"/>
         <div className="bigTextHome">Hi</div>
       </div>


        <div className="bottomHalf">
         <div className="bottomHalfLeft">This is my first website</div>
         <div className="bottomHalfRight">
             My name is Timofey (I also go by Tim) and I am a Full Stack Developer with a degree in Psychology & Sociology and years of experience as a manager at a movie theatre.
             What you see is my first self-made website - just a few years ago this was unimaginable. 
             I have tried various professions, but software engineering is the first one where I enjoy the process, the result, and see my place in it.
             If you like what you see, want to hire me or just chat about coding, hit me up on the socials listed below or my email!
         </div>
        </div>
     </div>
  );
};

export default App;

// As a kid, I did not dream of doing any of the things mentioned, but life works in mysterious ways. In the spring of 2020, just like many, 
// I worked, what turned out to be the last shift at my part-time job and was faced with a question: What's next? And then another one: What do I want to do?
// I have tried tutoring English, interpreting, and even considered monitoring school bus cameras (crazy to think).
