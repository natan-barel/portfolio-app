import React, { useState } from 'react';
import './Articles.css';
import ArticleModal from './ArticleModal';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Sample articles data - you can replace this with your actual articles
  const articles = [
    {
      id: 1,
      title: "Getting Started with React",
      summary: "Learn the basics of React and how to create your first component.",
      content: "React is a popular JavaScript library for building user interfaces...",
      date: "2024-03-20"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      summary: "Deep dive into advanced JavaScript concepts every developer should know.",
      content: "JavaScript is a versatile programming language...",
      date: "2024-03-18"
    },
    {
      id: 3,
      title: "Web Development Best Practices",
      summary: "Essential best practices for modern web development.",
      content: "Modern web development requires attention to many aspects...",
      date: "2024-03-15"
    }
  ];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="articles-container">
      <h2>Articles</h2>
      <div className="articles-list">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            onClick={() => handleArticleClick(article)}
          >
            <h3>{article.title}</h3>
            <p className="article-summary">{article.summary}</p>
            <span className="article-date">{article.date}</span>
          </div>
        ))}
      </div>
      
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Articles; 