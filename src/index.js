import React from 'react';

import ReactDOM from 'react-dom/client';
import "./index.css";

import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project.js/Project';
import Education from './components/Education';
import Skills from './components/Skills';
import Hero from './components//Hero';
import "./index.css";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Hero/>}></Route>
  {/* <Route path="/education" element={<Education/>}></Route> */}
  <Route path='/skills' element={<Skills/>}></Route>
  <Route path='/projects' element={<Project/>}/>
  
  </Routes>
  <Footer/>
  
  </BrowserRouter>



  

  
);

