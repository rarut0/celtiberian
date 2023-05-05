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
  
  export const fetchArticles = (searchTerm, page = 1) => {
    return (dispatch) => {
      dispatch(fetchArticlesRequest());
      return fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchTerm}&format=json&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchArticlesSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchArticlesFailure(error.message));
        });
    };
  };
  

  
  