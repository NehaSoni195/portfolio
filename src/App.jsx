import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./components/Skills";
import "./App.css";
/* ========================================= CODE BACKGROUND BLOCK ========================================= */ function CodeBlock({
  className = "",
}) {
  return (
    <div className={`global-code-block ${className}`}>
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
        role: <span className="code-green"> "React Native Developer" </span>
        ,{" "}
      </div>{" "}
      <div className="code-indent">
        {" "}
        experience: <span className="code-orange"> "Production Apps" </span>
        ,{" "}
      </div>{" "}
      <div className="code-indent"> skills: [ </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green"> "React Native" </span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green"> "Expo" </span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green"> "JavaScript" </span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green"> "TypeScript" </span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green"> "Redux" </span>,{" "}
      </div>{" "}
      <div className="code-indent-2">
        {" "}
        <span className="code-green"> "REST APIs" </span>{" "}
      </div>{" "}
      <div className="code-indent"> ] </div> <div> {"};"} </div> <br />{" "}
      <div>
        {" "}
        <span className="code-purple"> function </span>{" "}
        <span className="code-blue"> buildProduct </span> () {"{"}{" "}
      </div>{" "}
      <div className="code-indent">
        {" "}
        <span className="code-purple"> return </span>{" "}
        <span className="code-green"> "clean & scalable UI" </span> ;{" "}
      </div>{" "}
      <div> {"}"} </div> <br />{" "}
      <div>
        {" "}
        <span className="code-purple"> const </span> responsiveUI ={" "}
        <span className="code-orange"> true </span> ;{" "}
      </div>{" "}
      <div>
        {" "}
        <span className="code-purple"> const </span> cleanCode ={" "}
        <span className="code-orange"> true </span> ;{" "}
      </div>{" "}
    </div>
  );
}
/* ========================================= APP ========================================= */ function App() {
  return (
    <div className="portfolio">
      {" "}
      {/* ================================= GLOBAL CODE BACKGROUND ================================= */}{" "}
      <div className="global-code-background" aria-hidden="true">
        {" "}
        <CodeBlock className="global-code-1" />{" "}
        <CodeBlock className="global-code-2" />{" "}
        <CodeBlock className="global-code-3" />{" "}
        <CodeBlock className="global-code-4" />{" "}
        <CodeBlock className="global-code-5" />{" "}
        <CodeBlock className="global-code-6" />{" "}
        <CodeBlock className="global-code-7" />{" "}
        <CodeBlock className="global-code-8" />{" "}
        <CodeBlock className="global-code-9" />{" "}
      </div>{" "}
      {/* ================================= DARK OVERLAY ================================= */}{" "}
      <div className="global-background-overlay"></div>{" "}
      {/* ================================= YOUR EXISTING WEBSITE ================================= */}{" "}
      <div className="portfolio-content">
        {" "}
        <Navbar /> <Hero /> <About /> <Skills /> <Experience /> <Projects />{" "}
        <Contact /> <Footer />{" "}
      </div>{" "}
    </div>
  );
}
export default App;
