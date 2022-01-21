import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Router} from 'react-router-dom';
import Urlnotfound from './component/Urlnotfound'
import User from './component/User'
import MainPage from './MainPage'
ReactDOM.render(
  <React.StrictMode>
    <MainPage/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
