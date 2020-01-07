import React from 'react';
import styles from './Project.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ProjectCard({ info, altdesc, image }) {
  return (
    <>
      {image && <img src={image} alt={altdesc}></img>}
      <p className={styles.projectName}>{info.name}</p>
      <Carousel transitionTime={1000}>
        <div>
          <img src="./project_data/battleShip.png" alt='battleship' />
          <p className="legend">
          </p>
        </div>
        <div>
          <img src="/assets/2.jpeg" />
          <p className="legend">

          </p>
        </div>
        <div>
          <img src="/assets/3.jpeg" />
          <p className="legend">

          </p>
        </div>
        <div>
          <img src="/assets/4.jpeg" />
          <p className="legend">

          </p>
        </div>
        <div>
          <img src="/assets/5.jpeg" />
          <p className="legend">

          </p>
        </div>
      </Carousel>

      {info.homepage && (<p>Site: <a href={info.homepage} target="_blank" rel="noopener noreferrer"> {info.homepage}</a></p>)}
      {info.html_url && (<p>Github: <a href={info.html_url} target="_blank" rel="noopener noreferrer"> {info.html_url}</a></p>)}

      <p>{info.description}</p>
      <hr className={styles.fade}></hr>
    </>
  )
};