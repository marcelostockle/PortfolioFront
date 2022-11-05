import React from 'react'
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProjectPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
