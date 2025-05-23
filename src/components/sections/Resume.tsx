import React from 'react';

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">VIT Bhopal University</h4>
            <span>2020 — 2025</span>
            <p className="timeline-text">
              Integrated Masters in Technology
              <br />
              GPA: 8.72/10
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">J. D. Tytler School</h4>
            <span>2019 — 2020</span>
            <p className="timeline-text">
              Class 12 - CBSE Board
              <br />
              Percentage: 89.6%
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Data Science Intern</h4>
            <span>2024</span>
            <p className="timeline-text">
              ThinkSage - Working on implementing machine learning solutions and data analysis.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SDE Intern</h4>
            <span>2023 — 2024</span>
            <p className="timeline-text">
              ITJOBSXS - Developing and maintaining web applications.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'React', 'TypeScript'].map((skill) => (
            <li key={skill} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill}</h5>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;