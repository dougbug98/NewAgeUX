import React from 'react';
import './article.css';

// Passing the imgUrl, date, and title through as props
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="newageux__blog-container_article">
        <div className="newageux__blog-container_article-image">
            <img src={imgUrl} alt="blog" />
        </div>
        <div className="newageux__blog-container_article-content">
            <div>
              <p>{date}</p>
              <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article