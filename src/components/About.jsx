import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCodeBranch,
  FaLaptopCode,
} from "react-icons/fa";
import "./css/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1>About Me</h1>
        <p className="description">
          I'm Paulius, a versatile web developer with a passion for crafting
          exceptional online experiences. With a creative mindset and a knack
          for problem-solving, I thrive on bringing ideas to life through clean
          and efficient code. Whether it's building intuitive user interfaces or
          implementing robust backend systems.
        </p>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <FaCode className="icon" /> Programming Languages:
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </li>
            <li>
              <FaLaptopCode className="icon" /> Frameworks and Libraries:
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </li>
            <li>
              <FaDatabase className="icon" /> Database Technologies:
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </li>
            <li>
              <FaCodeBranch className="icon" /> Version Control:
              <ul>
                <li>Git</li>
              </ul>
            </li>
            <li>
              <FaServer className="icon" /> Other Skills:
              <ul>
                <li>Object-Oriented Programming</li>
                <li>Problem-Solving</li>
                <li>Team Collaboration</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
