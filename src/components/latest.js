import React, { Component } from 'react';
import YouTube from './youtube';

export default class LatestWork extends Component {

  render() {
    return (
      <section className="latest-work">
        <h2>My Latest </h2>
        <YouTube />
      </section>
    );
  }
}
