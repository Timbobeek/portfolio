import React from 'react';
import './App.css';
import homeface2 from './images/homeface2.jpg'
import homeface1 from './images/homeface1.jpg'


let words = ['Welcome', 'Добро пожаловать', 'Bienvenido', 'Ласкаво просимо', 'Willkommen', 'Բարի գալուստ'],
    part = '',
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

  function setText() {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }

    // const effectivePart = part ? part : "&nbsp;"

    // document.getElementById('welcomeText').innerHTML = effectivePart;
  }

const App = () => {

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText();
      const effectivePart = part ? part : "&nbsp;";
      document.getElementById('welcomeText').innerHTML = effectivePart;
    }, speed);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <div className='homePage'>
      <div id='welcomeText' className='welcomeText'></div>
      <img className='ProfilePicture2' src={homeface2} alt="my profile pic2"/>
      <div className='aboutMeText'>
           <p>Hi! I am a 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫, with recent project accomplishments where I contributed to full stack component builds using RESTful APIs, JWT token authentication, and Jest testing to deliver responsive and interactive applications. I have experience with UI/UX design creation and solution integrations where I provided aesthetically pleasing design elements with responsive functionality. Additionally, I have optimized front end website features utilizing Styled Components, Js, CSS, HTML, Figma, Ant-Design, Yup, and more to improve site navigation and user experience.</p>
      </div>
      <img className='ProfilePicture1' src={homeface1} alt="my profile pic"/>
    </div>
  );
}

export default App;
