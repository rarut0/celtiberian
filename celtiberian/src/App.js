import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from './actions';

function App() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.snippet}</p>
              <a href={article.url}>Read More</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;