import React from "react";

const ContactMe = () => {
  return (
    <section id="contactme" className="contactme-section section">
      <div className="zrb-container">
        <div className="section-head">
          <h1>
            Let's get in <span>Touch!</span>
          </h1>
        </div>
        <div className="contactme-container">
          <div className="contactme-form">
            <form action="post">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-trasparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="fullname"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="email-ad"
                  id="fullname"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-trasparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email-ad"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-trasparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="subject"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Subject
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <textarea
                  name="message"
                  id="message"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-trasparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="message"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Message
                </label>
              </div>
              <input type="submit" />
            </form>
          </div>
          <div className="contactme-info">
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
