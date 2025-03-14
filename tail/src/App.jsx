import React from 'react';
import NavBar from './navbar';
import Home from './pages/home';
import Gallery from "./pages/gallery";
import AboutMe from "./pages/aboutme";
import './index.css'

function App() {
  return (
      <div>
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Gallery/>
      </div>
  )
}

export default App
