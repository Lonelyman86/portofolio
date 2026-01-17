import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is [User] and I enjoy creating things that live on the internet.
            My interest in web development started back in 2018 when I decided to try editing custom themes —
            turns out hacking together HTML & CSS was pretty fun!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up,
            and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
