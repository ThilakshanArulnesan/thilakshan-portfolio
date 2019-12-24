import React from 'react';
import image from '../../me.jpg';
import styles from './About.module.scss';

import git from './GitHub-Mark-120px-plus.png';
import linkedInImage from './linkedIn.png';

export default function About(props) {
  //TODO: SKILLS
  console.log(styles);
  return (
    <>
      <article className={styles.about}>
        <h1 >  Thilakshan Arulnesan </h1>
        <img src={image} alt="Thilakshan Arulnesan"></img>
        <ul>
          <li><a href={'https://github.com/ThilakshanArulnesan'}> <img className={styles.logo} src={git} alt='Github logo' /> Github </a></li>

          <li><a href={'https://www.linkedin.com/in/thilakshan/'}><img className={styles.logo} src={linkedInImage} alt='LinkedIn logo' />LinkedIn </a> </li>
        </ul>
        <h2>Summary</h2>
        <p>I am a McMaster University Integrated Science Physics concentration graduate with experience in teaching. I love working on puzzles and trying to tackle problems using any tools available to me.
        </p>
        <h2>Skills</h2>


      </article>
    </>
  )
};