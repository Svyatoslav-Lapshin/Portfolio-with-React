function Contact() {
  return (
    <div className="container">
      <header>
        <h1 className="title-rubric">Contact Page!</h1>
      </header>

      <main className="hero contact-page">
        <article className="contact-info">
          <h2>Contact </h2>
          <ul>
            <li>
              <strong> Email:</strong>
              <a
                href="mailto:slavalapshin17@gmail.com"
                className="contact-mail"
              >
                slavalapshin17@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone number:</strong>+46731465840
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/Svyatoslav-Lapshin"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>GitHub</strong>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/svyatoslav-lapshin-81b442266/"
                className="linkedin"
                target="_blank"
              >
                <strong>LinkedIn</strong>
              </a>
            </li>
          </ul>
        </article>

        <article className="contact-message">
          <h2>Extra</h2>
          <p>
            I am always open to new opportunities and professional
            collaborations.
            <br />
            Don’t hesitate to reach out — I look forward to hearing from you!
          </p>
        </article>
      </main>
    </div>
  );
}

export default Contact;
