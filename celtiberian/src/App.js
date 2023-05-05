import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from './actions';
import ArticleTable from './ArticleTable';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchArticles(searchTerm));
  };

  useEffect(() => {
    dispatch(fetchArticles(''));
  }, [dispatch])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ArticleTable />
    </div>
  );
}

export default App;
