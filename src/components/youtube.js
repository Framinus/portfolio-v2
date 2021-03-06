import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed'
import '../style/youtube.css';

export default function YT (props) {
  return (
    <section className="youtube-section">
      <div className="video-description">
        <h3 className="youtube-header">
          Building an API in Node.js, Express and PostgreSQL
        </h3>
        <p className="youtube-blurb">
          In this ongoing YouTube series, I live code the building of a simple, well-tested API. The API is built in Node.js, connects to a PostgreSQL database, and is tested with Mocha and Chai. The series assumes basic JavaScript knowledge, but explains Bash basics, Git and GitHub, and the whys behind common conventions. I hope you'll code along!
        </p>
      </div>
      <div
        className="video-container"
        >
        <div className="video-wrapper">
          <ResponsiveEmbed src="https://www.youtube.com/embed/9ru0jZYbB04"
                           allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
