import React from "react";
import "./css/Projects.css";
const projects = [
  {
    id: 1,
    title: "Image Search",
    description: "A simple image searcher using a keyword",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    imageUrl: "https://i.ibb.co/HTZ1PmN/Photo-Search.png",
    liveUrl: "https://photo-search-gold.vercel.app/",
    githubUrl: "https://github.com/FriendlyGuy1/Photo_Search",
  },
  {
    id: 2,
    title: "Contact page",
    description: "A contact sumbit form which saves the data in the firebase and prints out all the submitted messages",
    technologies: [
      "JavaScript",
      "React",
      "CSS",
      "Firebase",
    ],
    imageUrl: "https://placehold.co/420x300",
    liveUrl: "https://react-firebase-woad.vercel.app/",
    githubUrl: "https://github.com/FriendlyGuy1/React_Firebase",
  },
  {
    id: 3,
    title: "Event Sharing Page",
    description: "Website used to share or to find yourself some events to attend",
    technologies: [
      "JavaScript",
      "React",
      "CSS",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Vite"
    ],
    imageUrl: "https://i.ibb.co/KGg9PcG/Screenshot-13.png",
    liveUrl: "https://eventpage-chp7.onrender.com/",
    githubUrl: "https://github.com/FriendlyGuy1/EventPage-front-end",
  },
  {
    id: 4,
    title: "AD posting website",
    description: "Website where you can post and check peoples ad's",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase",
    ],
    imageUrl: "https://placehold.co/420x300",
    liveUrl: "https://adpage-lake.vercel.app/",
    githubUrl: "https://github.com/FriendlyGuy1/FireBase",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div>
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  <strong>Technologies used:</strong>
                  <ul>
                    {project.technologies?.map((technology, index) => (
                      <li key={index}>{technology}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
