import React, { useEffect } from 'react';
import './Articles.css';
import ArticleContent from './ArticleContent';

const ArticleModal = ({ article, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    // Save the current scroll position
    const scrollY = window.scrollY;
    
    // Add styles to prevent background scrolling
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // Cleanup function to restore scrolling when modal is closed
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

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