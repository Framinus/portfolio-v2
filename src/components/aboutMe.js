import React from 'react';
import '../style/aboutMe.css';
export default function AboutMe (props) {
  return (
    <section className="about-me-container">
      <div className="about-me-text">
        <h2>
          About Me
        </h2>
        <p>
          I was born and raised in New York City and matured in the Bay Area like a fine California wine. I love hiking, biking, and hanging out with my wife and our dog and cats.
        </p>
        <p>
          In my pre-engineer life, I got a <a href="http://qcpages.qc.cuny.edu/Political_Science/">Political Science Degree</a>, taught ESL students how to get past CUNY's writing exam, and worked my way up into management roles at <a href="https://www.starbucks.com/">Starbucks</a> and <a href="https://www.cb2.com/">CB2</a>. I decided to learn to code on my nights and weekends, and then dedicated myself to a future of coding and attended a 10 month, full time bootcamp. I landed my first tech job a week after I finished!
        </p>
        <p>
          I am a queer man who champions workplace diversity and inclusive hiring practices for people of color, women, trans folks, dis/abled folks and people from poor and working class backgrounds.
        </p>
      </div>

    </section>
  );
}
