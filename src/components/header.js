import React from 'react';
import '../style/header.css';

export default function Header (props) {
  return (
    <header
      className="header"
      primary={"true"}
      >
      <h1 className="my-name">
        James McCormack
      </h1>
      <div className="navbar">
        <nav className="menu left-menu">
          <ul>
            <li>
              Projects
            </li>
            <li>
              Technical writing
            </li>
            <li>
              About me
            </li>
          </ul>
        </nav>
        <nav className="menu right-menu">
          <ul>
            <li>
              <a href="https://github.com/framinus">
              GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jamesinbrevity">
              Twitter
              </a>
            </li>
            <li>
              <a href="https://medium.com/@thejamesmccormack">
              Medium
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC5jXMeE08sKTYKW_p_UhZ7A">
              YouTube
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
