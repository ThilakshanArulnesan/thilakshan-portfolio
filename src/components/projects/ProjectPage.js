import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Project.module.scss'


export default function ProjectPage({ projects, loading }) {

  let projectCards = projects.map(d => {
    return (<li key={d.data.id}>
      <ProjectCard info={d.data} />
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