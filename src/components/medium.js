import React from 'react';
import '../style/medium.css';

export default function MediumArticle(props) {
  return (
    <section className="medium-article">
      <a href={props.link}>
        <h3>{props.title}</h3>
      </a>
      <article>{props.teaser}</article>
    </section>
  );
}
