import React from "react";

const ContactForm = ({ form, sendEmail, handleMessageValues }) => {
  return (
    <div className="contactme-form">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">
          <input
            type="text"
            onChange={handleMessageValues}
            name="user_name"
            placeholder="Enter Your Full name"
          />
        </label>
        <label htmlFor="user_email">
          <input
            type="email"
            onChange={handleMessageValues}
            name="user_email"
            placeholder="Enter Your Email"
          />
        </label>
        <label htmlFor="suject">
          <input
            type="text"
            name="subject"
            onChange={handleMessageValues}
            placeholder="Enter Subject"
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            onChange={handleMessageValues}
            placeholder="Enter Your Message"
          />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
