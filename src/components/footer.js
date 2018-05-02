import React from 'react';
import '../style/footer.css';

export default function Footer (props) {
  return (
    <footer className="footer-container">
      <p>
        This website is lovingly handcrafted in React.
      </p>
      <small>
        &copy; James McCormack 2018
      </small>
    </footer>
  );
}
