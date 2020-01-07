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
            <Link onClick={() => setSelected('about')} to="/about">

              <span className={style.fullText}>Thilakshan Arulnesan</span>
              <span className={style.shortText}>Thilakshan</span>
            </Link>
          </li>

          <li className={selected === 'projects' ? style.liSelected : ''} >
            <Link onClick={() => setSelected('projects')} to="/projects"> Projects </Link>
          </li>

          <li className={selected === 'blog' ? style.liSelected : ''} >
            <Link onClick={() => setSelected('blog')} to="/blog"> Blog </Link>
          </li>

          <li className={selected === 'contact' ? style.liSelected : ''} >
            <Link onClick={() => setSelected('contact')} to="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </>
  )
};