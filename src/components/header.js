import React from 'react';
import '../style/header.css';

export default function Header (props) {
  return (
    <header
      className="header"
      >
      <h1 className="my-name">
        James McCormack
      </h1>
      <h3 className="subtitle">Software Engineer &#8226; Oakland, CA</h3>
      <div className="navbar">
        <nav className="menu left-menu">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#writing">Writing</a>
            </li>
            <li>
              <a href="#aboutme">About me</a>
            </li>
          </ul>
        </nav>
        <nav className="menu right-menu">
          <ul>
            <li>
              <a href="https://github.com/framinus">
              <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jamesinbrevity">
              <i className="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC5jXMeE08sKTYKW_p_UhZ7A">
              <i className="fab fa-youtube-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/james-mccormack-185b0a99/"><i className="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="https://medium.com/@thejamesmccormack"><i className="fab fa-medium"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
