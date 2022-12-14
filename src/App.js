import React from 'react';
import './App.css';


const App = () => {
  return(
    <div className='homePage'>
      <span className='welcome'>
        <span class="message">Welcome!</span>
        <span class="hiddenMessage">Добро пожаловать!</span>
      </span>
      <img className='ProfilePicture1' src="homeface1.jpg" alt="my profile pic"/>
      <div className='aboutMeText'>
           <p>Hi! I am a 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫, with recent project accomplishments where I contributed to full stack component builds using RESTful APIs, JWT token authentication, and Jest testing to deliver responsive and interactive applications. I have experience with UI/UX design creation and solution integrations where I provided aesthetically pleasing design elements with responsive functionality. Additionally, I have optimized front end website features utilizing Styled Components, Js, CSS, HTML, Figma, Ant-Design, Yup, and more to improve site navigation and user experience.</p>
      </div>
      <img className='ProfilePicture2' src="homeface2.jpg" alt="my profile pic2"/>
    </div>
  );
}

export default App;
