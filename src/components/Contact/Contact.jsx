import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

export default function Contact() {
  const form = useRef();
  const [submission, setSubmission] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Email send on form submission
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          // Set confirmation
          setSubmission(true);
        },
        (error) => {
          console.error;
          // Set error modal
          setError(true);
        }
      );

    // Reset form inputs
    e.target.reset();
  }

  return (
    <>
      <div className={`Contact ${submission ? 'hidden' : 'visible'}`}>
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="user_name"
              id="name"
              autoComplete="off"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="user_email"
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
      <div className={`confirmation ${submission ? 'visible' : 'hidden'}`}>
        <h1>Thank you!</h1>
        <h2>Your message has been sent successfully.</h2>
        <p>I look forward to connecting with you soon!</p>
      </div>
      <div className={`error ${error ? 'visible' : 'hidden'}`}>
        <h2>Error</h2>
        <p>Please try again.</p>
      </div>
    </>
  );
}
