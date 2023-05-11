import React from 'react';
import './resume.css';

var words = ['Resume', 'Резюме', 'Currículum', 'Резюме', 'Resümee', 'Իմ ռեզյումեն'],
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

    const effectivePart = part ? part : "&nbsp;"

    document.getElementById('resumeTitle').innerHTML = effectivePart;
  }


const Resume = () => {

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText();
    }, speed);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <div className='resumeDiv'>
      <span id='resumeTitle' className='resumeTitle'>Resume</span>
      <a href="resume.pdf" download="Timofey Goloshchapov Resume"><button>PRESS TO DOWNLOAD</button></a>
    </div>
  );
}

export default Resume;