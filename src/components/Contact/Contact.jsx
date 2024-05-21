import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

export default function Contact() {
 const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    sendEmail(e)
  }

  function sendEmail(e) {
    emailjs
      .sendForm('', '', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  }


  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <form ref={form}  onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            autoComplete="off"
            required
          ></textarea>
        </label>
        <div className="flex-end">
          <input type="submit" value="Contact" className="submit-button" />
        </div>
      </form>
    </div>
  );
}
