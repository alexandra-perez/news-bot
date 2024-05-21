import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

export default function Contact() {
 const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
    );
    e.target.reset();
  }

  console.log(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    import.meta.env.VITE_PUBLIC_KEY
  );


  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <form ref={form}  onSubmit={handleSubmit}>
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
  );
}
