import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  //<React.StrictMode>
  //  <App/>
  //</React.StrictMode>,
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

