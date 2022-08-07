import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Projects from './components/projects';
import Footer from './components/footer';
import Accomplishments from './components/accomplishments';
import Resume from './components/resume';
import Hobbies from './components/myhobbies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/accomplishments' element={<Accomplishments/>}/>
        <Route path='/hobbies' element={<Hobbies/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
