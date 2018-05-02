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
          I was born and raised in New York City and matured in Oakland, California like a fine wine.
        </p>
        <p>
          In my pre-engineer life, I got a Political Science Degree, taught ESL students how to get past CUNY's writing exam, convinced people that coffee and cheese could be a great pairing, and learned exactly how to accessorize a room to make you want to take home everything in it.
        </p>
        <p>
          I love hiking, biking, watching <span className='italicize-me'>The Amazing Race</span> and <span className='italicize-me'>Doctor Who</span>, and arts and crafts time!
        </p>
        <p>
          I am an out and proud queer man who champions workplace diversity and inclusive hiring practices for people of color, women, trans folks, dis/abled folks and people from poor and working class backgrounds.
        </p>
      </div>

    </section>
  );
}
