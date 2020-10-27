import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Solicitudes from './components/solicitudes/Solicitudes'
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <Solicitudes/>
  </React.StrictMode>,
  document.getElementById('root')
);

