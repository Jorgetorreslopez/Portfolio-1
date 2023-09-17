import styles from "./Projects.module.css";
import React from "react";
import Header from "@/components/Header/Header";

const projects = [
  {
    title: `Ra's Cafe`,
    imageUrl: "https://i.imgur.com/1tWf9b9.png",
    link: "https://music-chat.skylarwildlove.me/",
  },
  {
    title: "IKEA MockUP",
    imageUrl: "https://i.imgur.com/I5yEUkO.png",
    link: "https://jtlikeaproject.skylarwildlove.me/ikea",
  },
  {
    title: "Music Playlist API",
    imageUrl: "https://i.imgur.com/flDSazf.png",
    link: "https://github.com/Jorgetorreslopez/Music-Users-API",
  },
  {
    title: "LEGEND Of YOU(in Progress)",
    imageUrl: "https://i.imgur.com/flDSazf.png",
    link: "https://github.com/Jorgetorreslopez/The-Legend-of-YOU",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <Header />
      <section className="bg-space-theme text-white p-8">
        <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700 mt-2 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
