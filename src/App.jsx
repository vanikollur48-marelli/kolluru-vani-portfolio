import "./App.css";
import vani from "./images/vani.jpg";
import resume from "./assets/resume.pdf";
function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <h2>Kolluru Vani</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <img src={vani} alt="Vani" className="profile-image" />

        <div className="hero-text">
          <h1>Hello, I'm Kolluru Vani 👋</h1>

          <h2>Automotive Software Engineer</h2>

          <p>
            Passionate Automotive Software Engineer with experience in
            AUTOSAR, Embedded Systems, CAN Communication and Software
            Development.
          </p>

          <a href={resume} download>
  <button>Download Resume</button>
</a>
        </div>
      </section><section className="about">
  <h2>About Me</h2>

  <p>
    <p>
I am an Embedded Software Engineer with 4+ years of experience in AUTOSAR-based ECU software development, software integration, and validation for automotive systems. I have worked on Tata Sierra (EV & ICE) and Volkswagen MPCI Gateway ECU projects, with expertise in Embedded C, CAN, CANoe, UDS Diagnostics, and ASPICE-based development.
</p>
  </p>
</section><section className="skills">
  <h2>Technical Skills</h2>

  <div className="skills-container">

    <div className="skill-card">
      <h3>AUTOSAR</h3>
    </div>

    <div className="skill-card">
      <h3>Embedded C</h3>
    </div>

    <div className="skill-card">
      <h3>CAN Communication</h3>
    </div>

    <div className="skill-card">
      <h3>CANoe</h3>
    </div>

    <div className="skill-card">
      <h3>Vector DaVinci</h3>
    </div>

    <div className="skill-card">
      <h3>CAPL</h3>
    </div>

    <div className="skill-card">
      <h3>Diagnostics (UDS)</h3>
    </div>

    <div className="skill-card">
      <h3>Git</h3>
    </div>

    <div className="skill-card">
      <h3>Linux</h3>
    </div>

    <div className="skill-card">
      <h3>Python</h3>
    </div>

  </div>
</section><section className="experience">
  <h2>Professional Experience</h2>

  <div className="experience-card">
    <h3>Automotive Software Engineer</h3>

    <h4>4+ Years Experience</h4>

   <ul>
  <li><strong>Marelli India Pvt. Ltd.</strong> | Software Engineer | May 2024 - Present</li>
  <li>Worked on Tata Sierra (EV & ICE) Automotive Lighting & Sensing Systems.</li>
  <li>Developed AUTOSAR Software Components (SWCs).</li>
  <li>Performed unit testing, integration testing, debugging and root cause analysis.</li>
  <li>Provided onsite customer support at Tata Motors, Pune.</li>
</ul>

<br />

<ul>
  <li><strong>Bosch Global Software Technologies</strong> | Associate Software Engineer | July 2022 - May 2024</li>
  <li>Worked on Volkswagen MPCI Gateway ECU.</li>
  <li>Performed MCAL configuration and software integration.</li>
  <li>Developed Software Unit Test Plans (SUPs).</li>
  <li>Executed Cantata testing with MC/DC coverage.</li>
  <li>Performed functional and robustness testing.</li>
</ul>
  </div>
</section><section className="projects">
  <h2>Projects</h2>

  <div className="project-card">
    <h3>Tata Sierra (EV & ICE)</h3>
    <p>
      Developed AUTOSAR-based ECU software for automotive lighting and sensing systems.
    </p>
  </div>

  <div className="project-card">
    <h3>Volkswagen MPCI Gateway ECU</h3>
    <p>
      Contributed to Gateway ECU development, software integration, MCAL configuration, and testing.
    </p>
  </div>
</section><section className="contact">
  <h2>Contact Me</h2>

  <p><strong>Name:</strong> Kolluru Vani</p>

  <p><strong>Email:</strong> vanikollur48@gmail.com</p>

  <p><strong>Phone:</strong> +91 9652477956</p>

  <p>
    <strong>LinkedIn:</strong>
    <a
      href="https://linkedin.com/in/kolluru-vani-031ba82aa"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin.com/in/kolluru-vani-031ba82aa
    </a>
  </p>
</section>

    </div>
  );
}

export default App;