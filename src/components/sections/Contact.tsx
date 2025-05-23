import React from 'react';

const Contact = () => {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required />
            <input type="email" name="email" className="form-input" placeholder="Email address" required />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required></textarea>

          <button className="form-btn" type="submit" disabled>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;