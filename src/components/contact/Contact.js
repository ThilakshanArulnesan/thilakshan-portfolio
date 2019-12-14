import React from 'react';

import git from './GitHub-Mark-120px-plus.png';
import linkedInImage from './linkedIn.png';
import './Contact.scss';

export default function Contact(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const data = new FormData(e.target);

    fetch('https://script.google.com/macros/s/AKfycbyNO_a31lFY60ua8vx141fZTExCQ1BlqVxLBBtBCg/exec', {
      method: 'POST',
      body: data,
    });

  }


  return (
    <>
      <ul>
        <li><a href={'https://github.com/ThilakshanArulnesan'}> <img src={git} alt='Github logo' /> /ThilakshanArulnesan </a></li>

        <li><a href={'https://www.linkedin.com/in/thilakshan/'}><img src={linkedInImage} alt='LinkedIn logo' />/Thilakshan </a> </li>
      </ul>
      <form action="https://script.google.com/macros/s/AKfycbyNO_a31lFY60ua8vx141fZTExCQ1BlqVxLBBtBCg/exec" method="post" encType='multipart/form-data'
        name='EmailTestForm'
        onSubmit={(e) => handleSubmit(e)}>
        Name
        <input type='text' size='24' name='name' />
        E-mail
        <input type='email' size='24' name='email' />
        Message:
        <textarea name='message' rows='4' cols='20'>
        </textarea>
        <input type='submit' value='Submit' />
      </form>
    </>
  )
};