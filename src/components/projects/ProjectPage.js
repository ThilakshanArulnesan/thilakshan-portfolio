import React from 'react';
import ProjectCard from './ProjectCard';


export default function ProjectPage({ projects, loading }) {

  let projectCards = projects.map(d => {
    return (<li key={d.data.id}>
      <ProjectCard info={d.data} />
    </li>)
  });


  // console.log(projects);
  return (
    <>
      <h1>Projects</h1>
      {!loading &&
        <ul>{projectCards}</ul>}
    </>
  )
};