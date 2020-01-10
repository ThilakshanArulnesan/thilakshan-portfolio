import React, { useState } from 'react';

import styles from './Contact.module.scss';

export default function Contact(props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch('https://script.google.com/macros/s/AKfycbyNO_a31lFY60ua8vx141fZTExCQ1BlqVxLBBtBCg/exec', {
      method: 'POST',
      body: data,
    });
    setSubmitted(true);
  }


  return (
    <>
      <h1 className={styles.contactTitle}>Contact</h1>
      {!submitted &&
        <>
          <form className={styles.form} action="https://script.google.com/macros/s/AKfycbyNO_a31lFY60ua8vx141fZTExCQ1BlqVxLBBtBCg/exec" method="post" encType='multipart/form-data'
            name='EmailTestForm'
            onSubmit={(e) => handleSubmit(e)}>
            <p className={styles.text}>Please fill out the form below to get in contact with me!</p>
            Name
   <input type='text' size='24' name='name' />
            E-mail
   <input type='email' size='24' name='email' />
            Message:
   <textarea name='message' rows='4' cols='20'>
            </textarea>
            <input className={styles.button} type='submit' value='Submit' />
          </form>
        </>
      }
      {submitted && <p className={styles.text}>Thanks for sending your message, it has been sent to me!</p>}

    </>
  )
};