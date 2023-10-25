import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; // Импортируем компонент App из app.js
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Используем компонент App здесь */}
  </React.StrictMode>,
  document.getElementById('root')
);