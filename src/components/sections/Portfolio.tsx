import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "WhatsApp Chat Analyzer",
      category: "Data Science",
      image: "https://images.pexels.com/photos/7014766/pexels-photo-7014766.jpeg",
      link: "https://huggingface.co/spaces/vedant22p/whatsapp-chat-analyzer"
    },
    {
      title: "AutoTabML",
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      link: "https://huggingface.co/spaces/singhtech/AutoTabML"
    },
    {
      title: "Elite CPU Scheduler",
      category: "Systems",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      link: "https://github.com/vedant22p/CPU-Scheduling-Algorithms"
    }
  ];

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Data Science</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Machine Learning</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Systems</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-select-value>Select category</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
        </div>

        <ul className="project-list">
          {projects.map((project, index) => (
            <li key={index} className="project-item active" data-filter-item data-category={project.category}>
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;