import React from 'react';

export default function ProjectCard({ info }) {
  return (
    <>
      <p>{info.name}</p>
      <p>{info.description}</p>
    </>
  )
};