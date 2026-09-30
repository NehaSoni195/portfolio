import {
  Smartphone,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      icon: <Smartphone />,
      title: "React Native",
      items: ["React Native", "Expo", "React Navigation", "Expo Router"],
    },
    {
      icon: <Code2 />,
      title: "Frontend",
      items: [
        "JavaScript",
        "React.js",
        "HTML",
        "CSS",
        "Responsive UI",
        "TypeScript",
      ],
    },
    {
      icon: <Globe />,
      title: "API & Backend",
      items: ["REST APIs", "Axios", "Fetch", "JSON", "Firebase"],
    },
    {
      icon: <Database />,
      title: "Data & State",
      items: [
        "Redux",
        "Redux-toolkit",
        "Context API",
        "AsyncStorage",
        "Secure Store",
      ],
    },
    {
      icon: <GitBranch />,
      title: "Development Tools",
      items: ["Git", "GitHub", "VS Code", "Android Studio"],
    },
    {
      icon: <Layers />,
      title: "Other ",
      items: [
        "Formik",
        "Yup",
        "Firebase Auth",
        "Push Notifications",
        "Google Maps",
        "Stripe",
        "Payment Gateway",
        "Google Sign-In",
      ],
    },
  ];

  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="highlight-number">02.</span>
          <h2>Skills</h2>
          <div></div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
