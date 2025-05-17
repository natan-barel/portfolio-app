import React from 'react';
import './Articles.css';

const ArticleContent = ({ article }) => {
  return (
    <div className="article-content">
      {/* Article Header */}
      <div className="article-header">
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span className="article-date">{article.date}</span>
          {article.author && <span className="article-author">By {article.author}</span>}
          {article.category && <span className="article-category">{article.category}</span>}
        </div>
      </div>

      {/* Featured Image */}
      {article.featuredImage && (
        <div className="article-featured-image">
          <img src={article.featuredImage} alt={article.title} />
          {article.imageCaption && <p className="image-caption">{article.imageCaption}</p>}
        </div>
      )}

      {/* Article Body */}
      <div className="article-body">
        {/* Introduction */}
        {article.introduction && (
          <div className="article-introduction">
            <p>{article.introduction}</p>
          </div>
        )}

        {/* Main Content Sections */}
        {article.sections && article.sections.map((section, index) => (
          <div key={index} className="article-section">
            {section.title && <h2>{section.title}</h2>}
            
            {/* Section Content */}
            {section.content && (
              <div className="section-content">
                {section.content.map((block, blockIndex) => {
                  switch (block.type) {
                    case 'paragraph':
                      return <p key={blockIndex}>{block.text}</p>;
                    case 'image':
                      return (
                        <div key={blockIndex} className="section-image">
                          <img src={block.src} alt={block.alt || ''} />
                          {block.caption && <p className="image-caption">{block.caption}</p>}
                        </div>
                      );
                    case 'code':
                      return (
                        <pre key={blockIndex} className="code-block">
                          <code>{block.code}</code>
                        </pre>
                      );
                    case 'list':
                      return (
                        <ul key={blockIndex} className="content-list">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            )}
          </div>
        ))}

        {/* Conclusion */}
        {article.conclusion && (
          <div className="article-conclusion">
            <h2>Conclusion</h2>
            <p>{article.conclusion}</p>
          </div>
        )}

        {/* Tags */}
        {article.tags && (
          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleContent; 