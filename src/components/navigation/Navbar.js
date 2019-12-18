import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import style from './Navbar.module.scss'

export default function Navbar(props) {
  const [selected, setSelected] = useState('about');

  return (
    <>
      <nav className={style.siteNav}>
        <ul>
          <li className={selected === 'about' ? style.liSelected : ''} >
            <Link onClick={() => setSelected('about')} to="/about">Thilakshan Arulnesan</Link>
          </li>

          <li className={selected === 'projects' ? style.liSelected : ''} >
            <Link onClick={() => setSelected('projects')} to="/projects">Projects</Link>
          </li>

          <li className={selected === 'blog' ? style.liSelected : ''} onClick={() => setSelected('blog')}>
            <Link to="/blog">Blog</Link>
          </li>

          <li className={selected === 'contact' ? style.liSelected : ''} onClick={() => setSelected('contact')}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};