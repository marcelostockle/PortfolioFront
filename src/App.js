import React from 'react'
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
