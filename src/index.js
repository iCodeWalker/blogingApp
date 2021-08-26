import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { blogReducer } from './reducers/blogReducers';


if(localStorage.getItem('blogs')==null)
  localStorage.setItem('blogs',JSON.stringify([]))

let initialState = {
  currentIndex : -1,
  list:JSON.parse(localStorage.getItem('blogs'))
}

var store = createStore(blogReducer,initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


