import React, { useState, useEffect } from 'react';


export default function ProjectPage({ descriptions, loading }) {



  // console.log(projects);
  return (
    <>
      <h1>Projects</h1>
      {!loading &&
        <p>{descriptions}</p>}
    </>
  )
};