import React from 'react';

const Contact = () => (
  <section className="contact container section" id="contact">
    <h2 className="section__title">Get In Touch</h2>

    <div className="contact__container grid">
      <div className="contact__info">
        <h3 className="contact__title">Let&apos;s talk about everything!</h3>
        <p className="contact__details">
          Open for opportunities. Let&apos;s connect and build something awesome together! 👋
        </p>
      </div>

      <form
        action="https://formspree.io/f/xeqwogve"
        method="POST"
        className="contact__form"
      >
        <div className="contact__form-group">
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Name"
              required
              name="name"
            />
          </div>

          <div className="contact__form-div">
            <input
              type="email"
              className="contact__form-input"
              placeholder="Email"
              required
              name="email"
            />
          </div>
        </div>

        <div className="contact__form-div">
          <input
            type="text"
            className="contact__form-input"
            placeholder="Subject"
            required
            name="subject"
          />
        </div>

        <div className="contact__form-div contact__form-area">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="contact__form-input"
            placeholder="Write your message"
            required
          />
        </div>

        <button type="submit" className="sub-btn">
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
