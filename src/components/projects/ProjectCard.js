import React from 'react';
import styles from './Project.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ProjectCard({ info, altdesc, image, numImages }) {
  let images = [];
  // console.log(numImages);

  for (let i = 0; i < numImages; i++) {
    // console.log(numImages);
    images[i] = (
      <div key={i}>
        <img src={`./project_images/${info.name}${i}.png`} alt={`${info.name} demo`} />
      </div>
    )
  }
  console.log(images);


  return (
    <>
      {image && <img src={image} alt={altdesc}></img>}
      <p className={styles.projectName}>{info.name}</p>
      <Carousel
        transitionTime={500}
        showStatus={false}
        showThumbs={false} >
        {images && images}
      </Carousel>

      {info.homepage && (<p>Site: <a href={info.homepage} target="_blank" rel="noopener noreferrer"> {info.homepage}</a></p>)}
      {info.html_url && (<p>Github: <a href={info.html_url} target="_blank" rel="noopener noreferrer"> {info.html_url}</a></p>)}

      <p>{info.description}</p>
      <hr className={styles.fade}></hr>
    </>
  )
};