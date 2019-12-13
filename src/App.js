import React from 'react';
import About from './components/about/About.js';
import ProjectPage from './components/projects/ProjectPage.js';
import Blog from './components/blog/Blog.js';
import Navbar from './components/navigation/Navbar';
import Contact from './components/contact/Contact.js';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Navbar />
        <>
          <Switch>

            <Route path="/projects">
              <ProjectPage />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>


            <Route path="/">
              <ProjectPage />
            </Route>

          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
