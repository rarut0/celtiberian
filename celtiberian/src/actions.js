export const fetchArticlesRequest = () => ({
    type: 'FETCH_ARTICLES_REQUEST',
  });
  
  export const fetchArticlesSuccess = (articles) => ({
    type: 'FETCH_ARTICLES_SUCCESS',
    payload: articles,
  });
  
  export const fetchArticlesFailure = (error) => ({
    type: 'FETCH_ARTICLES_FAILURE',
    payload: error,
  });
  
  export const fetchArticles = (searchTerm) => {
    return (dispatch) => {
      dispatch(fetchArticlesRequest());
      fetch(
        `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchTerm}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          const articles = data.items;
          dispatch(fetchArticlesSuccess(articles));
        })
        .catch((error) => {
          dispatch(fetchArticlesFailure(error.message));
        });
    };
  };
  