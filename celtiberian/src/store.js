import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

const reducerPaper = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_ARTICLES_SUCCESS':
      return { ...state, articles: action.payload, loading: false };
    case 'FETCH_ARTICLES_FAILURE':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const store = configureStore({reducer:reducerPaper} , applyMiddleware(thunk));

export default store;