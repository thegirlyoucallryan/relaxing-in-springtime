import App from './app';
import ReactDOM from 'react-dom';
import './styles/index.module.css';
import {BrowserRouter } from 'react-router-dom'




ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root')
  );