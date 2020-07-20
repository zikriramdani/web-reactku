import React from 'react';
import './App.css';

// Folder Master
import Preloader from './master/Preloader'
import Header from './master/Header';
import Footer from './master/Footer';

// Folder Component
import Intro from './intro/index';
import Skills from './skills/index';
import Experience from './experience/index';
import Education from './education/index';
import Profiles from './profiles/index';
import Portfolio from './portfolio/index';
import Clients from './clients/index';

function App() {
  return (
    <div className="App">
      <Preloader/>
      <div className="c-main-container  js-main-container">
        <Header/>
        <Intro/>
        <Skills/>
        <Experience/>
        <Education/>
        <Profiles/>
        <Portfolio/>
        <Clients/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
