import React from 'react';
import styles from './Blog.module.scss';

export default function Blog(props) {

  return (
    <>
      <h1>{props.title}</h1>
      <article className={styles.blog} dangerouslySetInnerHTML={{ __html: props.content }} />
    </>
  )
};