import React from "react";
import "./css/Home.css";
function Home() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView();
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-description">
          Hello! I'm a passionate front-end developer specializing in creating
          responsive and user-friendly web applications.
        </p>
        <p className="home-description">
          This portfolio showcases some of my recent projects and skills. Feel
          free to explore and get in touch with me!
        </p>
        <a onClick={scrollToContact} className="btn btn-primary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
