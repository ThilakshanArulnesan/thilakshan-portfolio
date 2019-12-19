import React from 'react';
import styles from './Project.module.scss'


export default function ProjectCard({ info, altdesc, image }) {
  return (
    <>
      {image && <img src={image} alt={altdesc}></img>}
      <p>{info.name}</p>
      <p>{info.description}</p>
      <hr className={styles.fade}></hr>
    </>
  )
};