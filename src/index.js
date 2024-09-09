import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals'
import {  Routes, Route , BrowserRouter } from "react-router-dom";
import Aboutus from './pages/Aboutus';
import Quote from './pages/Quote';
import Niche from './pages/Niche';
import Project from './pages/projects';
import ProjectDetail from './pages/projectdetail';
import Comingsoon from './pages/Comingsoon';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/quote" element={<Quote/>}></Route>
        <Route path="/niche/:title" element={<Niche/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/prjdetail/:title" element={<ProjectDetail/>}></Route>
        <Route path="/comingsoon" element={<Comingsoon/>}></Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
