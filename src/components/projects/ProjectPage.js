import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Project.module.scss'


export default function ProjectPage({ projects, loading, numImages }) {

  let projectCards = projects.map((d, i) => {
    return (<li key={d.data.id}>
      <ProjectCard info={d.data} numImages={numImages[i]} />
    </li>)
  });


  // console.log(projects);
  return (
    <>
      <h1 className={styles.projectTitle}> Projects </h1>
      {!loading &&
        <ul className={styles.projectList}>{projectCards}</ul>}
    </>
  )
};