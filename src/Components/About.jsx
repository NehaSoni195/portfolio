function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="highlight-number">01.</span>
          <h2>About Me</h2>
          <div></div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I’m a front-end and mobile developer focused on building clean,
              user-facing products with React, React Native, and Tailwind CSS. I
              enjoy turning designs and requirements into responsive web apps
              and cross‑platform mobile experiences that feel fast, consistent,
              and reliable. My work spans the full UI layer: component
              architecture, state management, API integration, performance
              tuning, and collaborating with backend engineers to ship features
              end to end.
            </p>

            <p>
              Over the past years, I’ve contributed to multiple live projects as
              a React and React Native developer. On the web side, I’ve built
              product listings, dashboards, and user flows in React with
              Tailwind, focusing on performance, accessibility, and a smooth
              user experience. On mobile, I’ve developed key screens and
              features in React Native for both iOS and Android, integrating
              authentication, data sync, and real-time updates via REST APIs.
              These experiences have strengthened my ability to write modular
              components, optimize renders, and deliver features that directly
              impact users.
            </p>

            <p>
              I’m based in Jaipur, India, and I’m open to remote and onsite
              opportunities where I can contribute to real, production
              applications and keep growing as an engineer. I’m especially
              interested in roles that value code quality, clear communication,
              and iterative improvement, and where I can work closely with
              designers, product managers, and backend developers.
            </p>

            <p>
              I'm continuously learning and looking for opportunities where I
              can improve my skills and contribute to real-world applications.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-number">01</span>
              <h3>React Native</h3>
              <p>
                Cross-platform mobile application development with React Native
                and Expo.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">02</span>
              <h3>React</h3>
              <p>
                Building dynamic user interfaces with React and modern
                JavaScript.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">03</span>
              <h3>JavaScript</h3>
              <p>
                Writing efficient and maintainable code with modern JavaScript
                features.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">04</span>
              <h3>TypeScript</h3>
              <p>
                Writing type-safe code with TypeScript for improved code quality
                and maintainability.
              </p>
            </div>{" "}
            <div className="highlight-card">
              <span className="highlight-number">05</span>
              <h3>HTML/CSS</h3>
              <p>
                Creating responsive and accessible user interfaces with modern
                HTML and CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
