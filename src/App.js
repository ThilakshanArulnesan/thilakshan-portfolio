import React, { useEffect, useState } from 'react';
import About from './components/about/About.js';
import ProjectPage from './components/projects/ProjectPage.js';
import BlogPage from './components/blog/BlogPage.js';
import Navbar from './components/navigation/Navbar';
import Contact from './components/contact/Contact.js';
import projectInfo from './components/projects/projects.json';
import axios from 'axios';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [blogData, setBlogs] = useState([]);

  //Get project projects dynamically
  useEffect(() => {
    let user = projectInfo.username;

    let urls = projectInfo.projects.map(name =>
      `https://api.github.com/repos/${user}/${name}`
    );
    let promiseArray = [];

    urls.forEach(url => promiseArray.push(axios.get(url)));

    Promise.all(promiseArray).then(data => {
      console.log(data);
      setProjects(data);
      setLoading(false);
    });

  }, []);

  useEffect(() => {

    axios.get('https://api.rss2json.com/v1/api.json',
      { params: { rss_url: 'https://medium.com/feed/@t.arulnes' } })
      .then((res) => {
        if (res.status !== 200) {
          setBlogs([]);
        } else {
          console.log(res.data.items);
          setBlogs(res.data.items.reverse());
        }
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
              <BlogPage blogData={blogData} />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/projects">
              <ProjectPage
                projects={projects}
                loading={loading}
              />
            </Route>

            <Route path="/">
              <ProjectPage
                projects={projects}
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
