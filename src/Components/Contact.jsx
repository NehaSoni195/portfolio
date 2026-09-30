function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <p className="contact-number">05. What's Next?</p>

        <h2 className="contact-title">Let’s build something great together.</h2>

        <p className="contact-text">
          I’m open to new opportunities, collaborations, and interesting
          projects. If you’re looking for a React Developer or would like to
          discuss a project, feel free to get in touch.
        </p>

        <div className="contact-socials">
          {/* Email */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ns195199@gmail.com">
            ✉ ns195199@gmail.com
          </a>

          {/* Phone */}
          <a href="tel:+917665328187">☎ +91 76653 28187</a>
        </div>

        <div className="contact-socials">
          <a href="https://github.com/NehaSoni195">GitHub</a>

          <a href="https://www.linkedin.com/in/neha-soni-720b1b23a">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
