import React from 'react';
import './Articles.css';

const ArticleModal = ({ article, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>{article.title}</h2>
          <span className="article-date">{article.date}</span>
        </div>
        <div className="modal-body">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal; 