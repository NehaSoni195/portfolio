import profileImage from "../assets/profile.png";
function CodeBlock({ className = "" }) {
  return (
    <div className={`background-code-block ${className}`}>
      {" "}
      <div>
        {" "}
        <span className="code-purple">const</span> developer = {"{"}{" "}
      </div>{" "}
      <div className="code-indent">
        {" "}
        name: <span className="code-green">"Neha Soni"</span>,{" "}
      </div>{" "}
      <div className="code-indent">
        {" "}
        role: <span className="code-green">"React Native Developer"</span>,{" "}
      </div>{" "}
      <div className="code-indent">
        {" "}
        experience: <span className="code-orange">"Production Apps"</span>,{" "}
      </div>{" "}
      <div className="code-indent">skills: [</div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green">"React Native"</span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green">"Expo"</span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green">"JavaScript"</span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green">"TypeScript"</span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green">"Redux"</span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green">"REST APIs"</span>{" "}
      </div>{" "}
      <div className="code-indent">]</div> <div>{"};"}</div> <br />{" "}
      <div>
        {" "}
        <span className="code-purple">function</span>{" "}
        <span className="code-blue">buildProduct</span>() {"{"}{" "}
      </div>{" "}
      <div className="code-indent">
        {" "}
        <span className="code-purple">return</span>{" "}
        <span className="code-green">"clean & scalable UI"</span>;{" "}
      </div>{" "}
      <div>{"}"}</div> <br />{" "}
      <div>
        {" "}
        <span className="code-purple">const</span> responsiveUI ={" "}
        <span className="code-orange">true</span>;{" "}
      </div>{" "}
      <div>
        {" "}
        <span className="code-purple">const</span> cleanCode ={" "}
        <span className="code-orange">true</span>;{" "}
      </div>{" "}
    </div>
  );
}
function Hero() {
  return (
    <section id="home" className="hero">
      {" "}
      {/* ================= CODE BACKGROUND ================= */}{" "}
      <div className="code-background" aria-hidden="true">
        {" "}
        <CodeBlock className="code-block-1" />{" "}
        <CodeBlock className="code-block-2" />{" "}
        <CodeBlock className="code-block-3" />{" "}
        <CodeBlock className="code-block-4" />{" "}
        <CodeBlock className="code-block-5" />{" "}
        <CodeBlock className="code-block-6" />{" "}
        <CodeBlock className="code-block-7" />{" "}
        <CodeBlock className="code-block-8" />{" "}
        <CodeBlock className="code-block-9" />{" "}
      </div>{" "}
      {/* ================= DARK OVERLAY ================= */}{" "}
      <div className="hero-background-overlay"></div>{" "}
      {/* ================= MAIN CONTENT ================= */}{" "}
      <div className="hero-container">
        {" "}
        <div className="hero-content">
          {" "}
          <p className="hero-greeting">Hello, I'm</p>{" "}
          <h1>
            {" "}
            Neha <span>Soni</span>{" "}
          </h1>{" "}
          <h2>Frontend Developer</h2>{" "}
          <p className="hero-description">
            {" "}
            React frontend developer who builds responsive, user-friendly web
            and app interfaces with a focus on performance and maintainability.
            Delivers production features used by real users, working closely
            with design and backend teams to create clean, scalable
            frontends.{" "}
          </p>{" "}
          {/* ================= EDUCATION ================= */}{" "}
          <div className="hero-education">
            {" "}
            <span className="education-label"> Education </span>{" "}
            <h3> B.Tech (Computer Science) </h3>{" "}
            <span className="education-date"> 2022-2026 </span>{" "}
            <p>
              {" "}
              Shri Bhawani Niketan Institute of Technology and
              Management(Rajasthan technical University){" "}
            </p>{" "}
            <span className="education-location"> Jaipur, Rajasthan </span>{" "}
          </div>{" "}
          {/* ================= BUTTONS ================= */}{" "}
          <div className="hero-buttons">
            {" "}
            <a href="#projects" className="primary-button">
              {" "}
              View My Projects{" "}
            </a>{" "}
            <a href="/resume.pdf" className="secondary-button">
              {" "}
              Download Resume{" "}
            </a>{" "}
          </div>{" "}
          {/* ================= SOCIAL LINKS ================= */}{" "}
          <div className="social-links">
            {" "}
            <a
              href="https://github.com/NehaSoni195"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/neha-soni-720b1b23a/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* ================= PROFILE IMAGE ================= */}{" "}
        <div className="hero-visual">
          {" "}
          <div className="profile-image-wrapper">
            {" "}
            <img
              src={profileImage}
              alt="Neha Soni - Frontend Developer"
              className="profile-image"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ================= SCROLL ================= */}{" "}
      <a href="#about" className="scroll-down">
        {" "}
        ↓{" "}
      </a>{" "}
    </section>
  );
}
export default Hero;
