import React from 'react';
import {
  Link
} from "react-router-dom";
import style from './Navbar.module.scss'
import classNames from 'classnames'

export default function Navbar(props) {

  // className

  // props.sections.map()
  return (
    <>
      <nav className={style.siteNav}>
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};