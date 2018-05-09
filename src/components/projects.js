import React, { Component } from 'react';
import Project from './project';
import '../style/projects.css';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "Dragon Picnic",
          description: "A game where players merge dragons in different combinations to defeat the humans that keep invading their village!",
          tech: 'React, Redux, Node, Express, PostgreSQL',
          gitlink: 'https://github.com/framinus/dragon-quest',
          livelink: 'https://dragon-picnic.herokuapp.com',
          imageurl: "/images/dragons-teaser.png",
          imagealt: "Website screenshot with a cartoon dragon and a cartoon human facing each other on playing cards",
        },
        {
          title: "Roam",
          description: "A travel site for users to create profiles and read and post reviews of their favorite cities.",
          tech: 'Node, Express, PostgreSQL, Ejs',
          gitlink: "https://github.com/Framinus/roam",
          livelink: "https://roam-travel-site.herokuapp.com",
          imageurl: "/images/roam-new-teaser.png",
          imagealt: "Roam website with nyc skyline as the background and a welcome message in the foreground."
        },
        {
          title: 'Patterns: A Memory Game',
          description: 'A memory based game inspired by the classic Simon game!',
          tech: 'JavaScript, JQuery, CSS',
          gitlink: 'https://github.com/Framinus/simon-game',
          livelink: 'http://patterns-memory-game.herokuapp.com/',
          imageurl: '/images/patterns.png',
          imagealt: 'Patterns game website still showing four primary color circles around a digital screen',
        },
      ],
    }
  }

  render() {
    return (
      <section className="projects-section">
        <h2>
          Projects
        </h2>
        <div className="projects-container">
          {this.state.projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                gitlink={project.gitlink}
                livelink={project.livelink}
                imageurl={project.imageurl}
                imagealt={project.imagealt}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
