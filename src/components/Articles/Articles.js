import React, { useState } from 'react';
import './Articles.css';
import ArticleModal from './ArticleModal';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Sample articles data with rich content structure
  const articles = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      summary: "A comprehensive guide to building scalable and maintainable React applications.",
      date: "2024-03-20",
      author: "Natan Barel",
      category: "Web Development",
      featuredImage: "https://via.placeholder.com/800x400",
      imageCaption: "Modern React application architecture",
      introduction: "In this article, we'll explore the best practices and patterns for building modern web applications using React. We'll cover everything from project setup to deployment.",
      sections: [
        {
          title: "Project Setup and Configuration",
          content: [
            {
              type: "paragraph",
              text: "Setting up a React project properly is crucial for its long-term success. Let's look at the essential tools and configurations."
            },
            {
              type: "code",
              code: "npx create-react-app my-app\ncd my-app\nnpm start"
            },
            {
              type: "list",
              items: [
                "Use Create React App for quick setup",
                "Configure ESLint and Prettier",
                "Set up TypeScript for type safety",
                "Implement proper folder structure"
              ]
            }
          ]
        },
        {
          title: "State Management",
          content: [
            {
              type: "paragraph",
              text: "Choosing the right state management solution is key to building scalable applications."
            },
            {
              type: "image",
              src: "https://via.placeholder.com/600x300",
              alt: "State Management Diagram",
              caption: "Different state management approaches in React"
            }
          ]
        }
      ],
      conclusion: "Building modern React applications requires careful consideration of architecture, state management, and best practices. By following these guidelines, you can create maintainable and scalable applications.",
      tags: ["React", "JavaScript", "Web Development", "Frontend"]
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      summary: "Deep dive into advanced JavaScript concepts every developer should know.",
      date: "2024-03-18",
      author: "Natan Barel",
      category: "JavaScript",
      featuredImage: "https://via.placeholder.com/800x400",
      imageCaption: "JavaScript advanced concepts visualization",
      introduction: "JavaScript is a versatile programming language with many advanced features. Let's explore some of the most important concepts.",
      sections: [
        {
          title: "Closures and Scope",
          content: [
            {
              type: "paragraph",
              text: "Understanding closures is fundamental to mastering JavaScript."
            },
            {
              type: "code",
              code: "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}"
            }
          ]
        }
      ],
      conclusion: "Mastering these advanced concepts will make you a better JavaScript developer.",
      tags: ["JavaScript", "Programming", "Web Development"]
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
      <div className="articles-list">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            onClick={() => handleArticleClick(article)}
          >
            {article.featuredImage && (
              <div className="article-card-image">
                <img src={article.featuredImage} alt={article.title} />
              </div>
            )}
            <div className="article-card-content">
              <h3>{article.title}</h3>
              <p className="article-summary">{article.summary}</p>
              <div className="article-card-meta">
                <span className="article-date">{article.date}</span>
                {article.category && (
                  <span className="article-category">{article.category}</span>
                )}
              </div>
            </div>
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