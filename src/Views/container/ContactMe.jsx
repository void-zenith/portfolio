import React from "react";
import SocialItems from "./../components/Social-items";

const ContactMe = () => {
  return (
    <section id="contactme" className="contactme-section section">
      <div className="zrb-container">
        <div className="section-head">
          <h1>
            Let's get in <span>Touch!</span>
          </h1>
          <SocialItems />
        </div>
        <div className="contactme-container">
          <div className="contactme-form">
            <form action="post">
              <label htmlFor="fullname">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Your Full name"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </label>
              <label htmlFor="suject">
                <input type="text" name="subject" placeholder="Enter Subject" />
              </label>
              <label htmlFor="message">
                <textarea name="message" placeholder="Enter Your Message" />
              </label>
              <input type="submit" />
            </form>
          </div>
          <div className="contactme-info">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6592573514554!2d85.33026876104105!3d27.666012127214106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ddc182f339%3A0xec009106dd012081!2sGwarko%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1671728179116!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
