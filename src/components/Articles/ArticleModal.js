import React from 'react';
import './Articles.css';
import ArticleContent from './ArticleContent';

const ArticleModal = ({ article, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <ArticleContent article={article} />
      </div>
    </div>
  );
};

export default ArticleModal; 