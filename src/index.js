import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Projects from './components/projects';
import Footer from './components/footer';
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
        <Route path='/hobbies' element={<Hobbies/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
