// BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, content, author }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default BlogPost;
