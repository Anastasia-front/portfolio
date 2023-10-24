export function Form() {
  return (
    <form className="contact__form">
      <div className="contact__inputs">
        <input
          className="contact__input"
          placeholder="Email"
          data-email-contact
        />
        <input
          className="contact__input"
          placeholder="Subject"
          data-subject-contact
        />
      </div>
      <textarea
        className="contact__textfield"
        data-body-contact
        placeholder="Message"
      ></textarea>
      <button type="submit" className="contact__submit" data-send-btn>
        Send Email
      </button>
    </form>
  );
}
