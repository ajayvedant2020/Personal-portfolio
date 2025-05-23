import React from 'react';

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I build intelligent, user-focused solutions by combining data science, software engineering, and modern web technologies. 
          With experience in NLP, deep learning, and full-stack development, I enjoy creating applications that are both impactful and efficient.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <ion-icon name="code-slash-outline"></ion-icon>
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Data Science</h4>
              <p className="service-item-text">
                Development of machine learning models and data analysis solutions.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <ion-icon name="desktop-outline"></ion-icon>
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">
                High-quality development of web applications using modern technologies.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;