import React from 'react';
import './Blog.scss';

export default function Blog(props) {

  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: props.content }} />
    </>
  )
};