import React, { Component } from 'react';
import MediumArticle from './medium';

export default class Writing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediumArticles: [
        {
          link: 'https://medium.com/queers-in-tech/server-side-json-web-token-implementation-with-postgresql-and-node-7278eb9dc1b2',
          title: 'Server Side JSON Web Token implementation with PostgreSQL and Node',
          teaser: 'This article is going to walk through the process of creating a JSON Web Token and the Passport strategies needed on the server to authenticate a user. I am using Node.js and Express to create my server...'
        },
      ]
    }
  }

  render() {
    return (
      <section>
      <h2>My Writing</h2>
        {this.state.mediumArticles.map((article, index) => {
          return (
            <MediumArticle
              link={article.link}
              title={article.title}
              teaser={article.teaser}
            />
          );
        })}
      </section>
    );
  };
}
