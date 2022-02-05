import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/fonts.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter} from 'react-router-dom';
import Router from './routing/Router';

ReactDOM.render(
  <BrowserRouter>
   <Router></Router>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
