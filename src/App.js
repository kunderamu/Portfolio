import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/resume'; // ✅ Capitalized filename to match convention
import Gallery from './components/Gallery';
// Combine Hero and About into one Home component (MainSection)
const MainSection = () => (
  <>
    <Home />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Gallery" element={<Gallery />} />

      </Routes>
    </Router>
  );
}

export default App;
