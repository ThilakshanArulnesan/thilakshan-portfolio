import React from 'react';
import image from 'me.jpg';


export default function About(props) {

  return (
    <>
      <article>
        <h1> About Thilakshan </h1>
        <img src={image}></img>
        <p>I am a McMaster University Integrated Science Physics concentration graduate with experience in teaching. I love working on puzzles and trying to tackle problems using any tools available to me.
        </p>
      </article>
    </>
  )
};