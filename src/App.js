import React, { useEffect, useState } from 'react';
import About from './components/about/About.js';
import ProjectPage from './components/projects/ProjectPage.js';
import Blog from './components/blog/Blog.js';
import Navbar from './components/navigation/Navbar';
import Contact from './components/contact/Contact.js';
import projects from './components/projects/projects.json';
import axios from 'axios'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  const [loading, setLoading] = useState(true);
  const [descriptions, setDescriptions] = useState([]);

  //Get project descriptions dynamically
  useEffect(() => {
    let user = projects.username;

    let urls = projects.projects.map(name =>
      `https://api.github.com/repos/${user}/${name}`
    );
    let promiseArray = [];

    urls.forEach(url => promiseArray.push(axios.get(url)));

    Promise.all(promiseArray).then(data => {
      console.log(data);
      setDescriptions(data.map(d => {
        return (<li key={d.data.id}> {d.data.description}</li>)
      }));
      setLoading(false);
    });

  }, []);

  return (
    <>
      <Router>

        <Navbar />
        <>
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/projects">
              <ProjectPage
                descriptions={descriptions}
                loading={loading}
              />
            </Route>

            <Route path="/">
              <ProjectPage
                descriptions={descriptions}
                loading={loading}
              />
            </Route>

          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
