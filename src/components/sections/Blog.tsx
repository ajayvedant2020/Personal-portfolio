import React from 'react';

const Blog = () => {
  const publications = [
    {
      title: "Spatially Attentive Scale Invariant Feature Modelling for Alzheimer's Disease Detection",
      category: "Research",
      date: "2024",
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
      link: "https://ieeexplore.ieee.org/abstract/document/10543826"
    },
    {
      title: "Scale Invariant Feature Modelling with Integrated Transfer Learning for Parkinson's Disease Diagnosis",
      category: "Research",
      date: "2024",
      image: "https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg",
      link: "https://ieeexplore.ieee.org/abstract/document/10723906"
    }
  ];

  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Publications</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {publications.map((pub, index) => (
            <li key={index} className="blog-post-item">
              <a href={pub.link}>
                <figure className="blog-banner-box">
                  <img src={pub.image} alt={pub.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{pub.category}</p>
                    <span className="dot"></span>
                    <time dateTime={pub.date}>{pub.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{pub.title}</h3>
                  <p className="blog-text">Click to read the full publication</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;