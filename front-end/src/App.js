import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home.js';
import AboutMePage from './pages/aboutMe.js';
import ProjectsPage from './pages/projects.js';
import CommentsPage from './pages/commentsPage.js';
import CareerPage from './pages/career.js';
import BlogPage from './pages/blog.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}
export default App;