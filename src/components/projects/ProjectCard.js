import React from 'react';
import styles from './Project.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ProjectCard({ info, altdesc, image, numImages }) {
  let images = [];

  for (let i = 0; i < numImages; i++) {

    images[i] = (
      <div key={i} >
        <img className={`${styles.screenshots}`}
          src={`./project_images/${info.name}${i}.png`} alt={`${info.name} demo`} />
      </div>
    )
  }



  return (
    <>
      {image && <img src={image} alt={altdesc}></img>}
      <p className={styles.projectName}>{info.name}</p>
      <Carousel
        className={styles.carouselContainer}
        dynamicHeight
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showThumbs={false} >
        {images && images}
      </Carousel>

      {info.homepage && (<p><strong>Website:</strong> <a href={info.homepage} target="_blank" rel="noopener noreferrer"> {info.homepage}</a></p>)}
      {info.html_url && (<p><strong>Github:</strong> <a href={info.html_url} target="_blank" rel="noopener noreferrer"> {info.html_url}</a></p>)}

      <p><strong>Description: </strong>{info.description}</p>
      <hr className={styles.fade}></hr>
    </>
  )
};