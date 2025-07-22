import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './styles.css';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact/>
    </>
  );
}

export default App;
