function Projects() {
  const projects = [
    {
      title: "Phintex App",
      description:
        "Phintex is a solar installation management application designed to connect customers, technicians, and delivery teams throughout the solar installation process. I worked on developing and maintaining React Native screens and features to provide a smooth and responsive mobile experience.",
      technologies:
        "React Native • Expo • REST API • AsyncStorage • JavaScript• TypeScript ",
      link: "https://play.google.com/store/apps/details?id=com.phintex.app",
    },
    {
      title: "Aabhushan KariGar App",
      description:
        "Abhushan Karigar is a mobile platform that connects jewellery artisans (karigars) with jewellers. The application provides profiles, job opportunities, hiring requests, networking, and in-app communication between users.",
      technologies: "React Native • Expo • Axios • API • TypeScript",
      link: "https://play.google.com/store/apps/details?id=com.abhushankarigar.app",
    },
    {
      title: "Dail-it App",
      description:
        "Dial it is a local business discovery and contact application that helps users find nearby businesses, search by name/category/location, view business details, save favourites, and directly contact or navigate to businesses..",
      technologies: "React Native • Expo • JavaScript",
      link: "https://play.google.com/store/apps/details?id=com.yogeshgalav.dailit",
    },
  ];

  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="highlight-number">04.</span>
          <h2>Projects</h2>
          <div></div>
        </div>

        <p className="section-intro">
          Some of the applications and projects I've worked on while learning
          and developing with React Native.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <div className="project-icon">📱</div>

                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <p className="project-tech">{project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
