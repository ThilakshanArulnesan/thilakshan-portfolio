import React from 'react';
import styles from './Blog.module.scss';

export default function Blog(props) {
  let date = new Date(props.date);
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <em>
        <p className={styles.info}>{`Published ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}. Link to original blog <a href={props.link} target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </em>
      <article className={styles.blog} dangerouslySetInnerHTML={{ __html: props.content }} />

      <hr className={styles.fade} />
    </>
  )
};