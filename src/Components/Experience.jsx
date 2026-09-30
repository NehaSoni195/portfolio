function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="highlight-number">03.</span>
          <h2>Experience</h2>
          <div></div>
        </div>
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Mobile Application Developer</h3>
              <p className="company">React Native/Expo Developer</p>
              <p className="experience-date">
                Aladinn Digital Solutions(Jaipur)
              </p>
            </div>

            <span className="experience-date">June 2025 - July 2026</span>
          </div>

          <ul>
            <li>
              Developed and modified mobile application screens using React
              Native and Expo.
            </li>

            <li>
              Implemented responsive UI designs across different device sizes.
            </li>

            <li>Integrated REST APIs using Axios and Fetch.</li>

            <li>
              Worked with navigation, dynamic routes, BackHandler and
              application flows.
            </li>

            <li>Used AsyncStorage for local data persistence.</li>

            <li>
              Worked with Formik and Yup for form handling and validation.
            </li>

            <li>
              Fixed bugs and implemented changes based on testing team
              requirements.
            </li>

            <li>
              Worked with Git and followed the existing project development
              workflow.
            </li>
          </ul>
        </div>{" "}
        <div className="experience-card ">
          <div className="experience-header">
            <div>
              <h3>Freelance React Developer</h3>{" "}
              <p className="company">React Developer</p>{" "}
              <p className="experience-date">Vue Nice Technology(Jaipur)</p>
            </div>

            <span className="experience-date">January 2026 - Present</span>
          </div>

          <ul>
            <li>
              Built reusable, modular React components and screens for
              dashboards, e-commerce flows, and user portals, ensuring
              consistency across projects and reducing development time for new
              features
            </li>

            <li>
              Worked directly with clients to clarify requirements, propose
              technical solutions, estimate timelines, and provide regular
              progress updates, ensuring on-time delivery and high satisfaction.
            </li>

            <li>
              Optimized front-end performance through code splitting, lazy
              loading, memoization, and efficient list rendering, reducing
              initial load times and improving Core Web Vitals on client sites.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
