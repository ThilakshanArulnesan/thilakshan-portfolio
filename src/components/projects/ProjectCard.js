import React from 'react';
import styles from './Project.module.scss'


export default function ProjectCard({ info, altdesc, image }) {
  return (
    <>
      {image && <img src={image} alt={altdesc}></img>}
      <p className={styles.projectName}>{info.name}</p>

      {info.homepage && (<p>Site: <a href={info.homepage} target="_blank" rel="noopener noreferrer"> {info.homepage}</a></p>)}
      {info.html_url && (<p>Github: <a href={info.html_url} target="_blank" rel="noopener noreferrer"> {info.html_url}</a></p>)}

      <p>{info.description}</p>
      <hr className={styles.fade}></hr>
    </>
  )
};