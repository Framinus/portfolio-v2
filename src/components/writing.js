import React, { Component } from 'react';
import MediumArticle from './medium';
import '../style/writing.css';

export default class Writing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediumArticles: [
        {
          link: 'https://medium.com/queers-in-tech/server-side-json-web-token-implementation-with-postgresql-and-node-7278eb9dc1b2',
          title: 'Server Side JSON Web Token implementation with PostgreSQL and Node',
          teaser: 'This article is going to walk through the process of creating a JSON Web Token and the Passport strategies needed on the server to authenticate a user. I am using Node.js and Express to create my server...',
          imageurl: '/images/token.png',
        },
        {
          link: 'https://medium.com/queers-in-tech/deploying-a-node-js-app-with-a-database-to-heroku-for-the-uninitiated-pt-1-66a651ed0f3a',
          title: 'Deploying a Node.js App with a Database to Heroku, Part 1.',
          teaser: 'Deploying an application with a PostgreSQL database can be tricky if you have never done it before. In part one of this series, we get your codebase ready for deployment',
        },
        {
          link: 'https://medium.com/queers-in-tech/deploying-a-node-js-app-with-a-database-for-the-uninitialized-part-2-9710b639f94f',
          title: 'Deploying a Node.js App with a Database to Heroku, Part 2.',
          teaser: 'In part two of this series, we deploy the application to Heroku and use the Heroku Bash CLI tool to set up the database on the server',
        }
      ]
    }
  }

  render() {
    return (
      <section className="writing-container">
        <h2>Writing</h2>
          {this.state.mediumArticles.map((article, index) => {
            return (
              <MediumArticle
                key={index}
                link={article.link}
                title={article.title}
                teaser={article.teaser}
                imageurl={article.imageurl}
              />
            );
          })}
      </section>
    );
  };
}
