import React from 'react';
import axios from 'axios';

import git from './GitHub-Mark-120px-plus.png';
import linkedInImage from './linkedIn.png';
import './Contact.scss';

export default function Contact(props) {

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  }


  return (
    <>
      <ul>
        <li><a href={'https://github.com/ThilakshanArulnesan'}> <img src={git} alt='Github logo' /> /ThilakshanArulnesan </a></li>

        <li><a href={'https://www.linkedin.com/in/thilakshan/'}><img src={linkedInImage} alt='LinkedIn logo' />/Thilakshan </a> </li>
      </ul>
      <form action="https://script.google.com/macros/s/AKfycbyNO_a31lFY60ua8vx141fZTExCQ1BlqVxLBBtBCg/exec" method="post" encType='multipart/form-data'
        name='EmailTestForm'>
        Name <br />
        <input type='text' size='24' name='VisitorName' />
        <br /><br />
        Message:<br />
        <textarea name='VisitorComment' rows='4' cols='20'>
        </textarea>
        <br /><br /> <input type='submit' value='Submit' onClick={(e) => handleClick(e)} />
      </form>
    </>
  )
};