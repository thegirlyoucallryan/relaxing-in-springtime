import app from './app.jsx';
import ReactDOM from 'react-dom';
import './styles/index.module.css';
import {BrowserRouter } from 'react-router-dom'




ReactDOM.render(
  <BrowserRouter><app/></BrowserRouter>,
    document.getElementById('root')
  );