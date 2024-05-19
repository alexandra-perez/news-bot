import './Contact.scss';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" id="name" autoComplete="off" />
        </label>
        <label>
          Email
          <input type="email" name="name" id="name" autoComplete="off" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" autoComplete="off"></textarea>
        </label>
        <div className="flex-end">
          <input type="submit" value="Contact" className="submit-button" />
        </div>
      </form>
    </div>
  );
}
