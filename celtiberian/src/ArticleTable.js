import React from 'react';
import { useSelector } from 'react-redux';

function ArticleTable() {
  const articles = useSelector((state) => state.articles);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Snippet</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article.id}>
            <td>{article.title}</td>
            <td>{article.snippet}</td>
            <td>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ArticleTable;
