import React from 'react';
import styles from './Project.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ProjectCard({ info, altdesc, image }) {
  return (
    <>
      {image && <img src={image} alt={altdesc}></img>}
      <p className={styles.projectName}>{info.name}</p>
      <Carousel
        transitionTime={500}
        showStatus={false}
        showThumbs={false} >
        <div>
          <img src="./project_images/battleShip.png" alt='battleship' />

        </div>
        <div>
          <img src="/assets/2.jpeg" />

        </div>
        <div>
          <img src="/assets/3.jpeg" />

        </div>
        <div>
          <img src="/assets/4.jpeg" />

        </div>
        <div>
          <img src="/assets/5.jpeg" />
        </div>
      </Carousel>

      {info.homepage && (<p>Site: <a href={info.homepage} target="_blank" rel="noopener noreferrer"> {info.homepage}</a></p>)}
      {info.html_url && (<p>Github: <a href={info.html_url} target="_blank" rel="noopener noreferrer"> {info.html_url}</a></p>)}

      <p>{info.description}</p>
      <hr className={styles.fade}></hr>
    </>
  )
};