import React from 'react';

const Content = () => {
  return (
    <div className="skills__info grid">
      <div className="skills__box">
        <div className="skills__description">
          {/* Awards */}
          <h4 className="list__heading">Awards:</h4>
          <ul className="list">
            <li className="inner__list">
              <a
                href="https://sites.google.com/lehigh.edu/pathways-rss2025/fellows?authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                Pathways@RSS
              </a>{" "}
              2025 Fellowship Award
              <span className="emphasize"> (acceptance 8%)</span>
            </li>
            <li className="inner__list">CVPR 2025 Travel Support Award</li>
            <li className="inner__list">ICRA 2025 Undergrad Outreach Workshop</li>
            <li className="inner__list">
            <a
                href="https://cs.brown.edu/news/2025/10/15/apply-now-for-the-10k-pausch-undergraduate-summer-research-award/"
                target="_blank"
                rel="noreferrer"
              >
              Randy Pausch Undergraduate Research Fellowship</a>
              <span className="emphasize"> ($13,350, 1 / 1200 per year)</span>
            </li>
            <li className="inner__list">
              First Place, 10th Annual Brown CS Research Symposium
              <span className="emphasize"> (1 out of 26)</span>
            </li>
            <li className="inner__list">Advanced Undergraduate Research SPRINT Fellowship</li>
          </ul>

          {/* Technical Skills */}
          <h4 className="list__heading">Technical Skills:</h4>
          <ul className="list">
            <li className="inner__list">Expert: Python</li>
            <li className="inner__list">Proficient: HTML, CSS</li>
            <li className="inner__list">
              Fluent: Golang, Java, C++, TypeScript, JavaScript, WebGL, OpenGL, React
            </li>
            <li className="inner__list">Prior Experience: C, Pyret, Racket</li>
          </ul>

          {/* Language */}
          <h4 className="list__heading">Language:</h4>
          <ul className="list">
            <li className="inner__list">
              Trilingual proficiency in English, Spanish (C1 by Instituto Cervantes), Chinese
            </li>
          </ul>

          {/* Interests */}
          <h4 className="list__heading">Interests:</h4>
          <ul className="list">
            <li className="inner__list skills">
              Semi-professional Chinese traditional dance, piano, taekwondo, novel writing,
              painting, drums, guitar, tennis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
