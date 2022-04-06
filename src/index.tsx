import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './API/MirageServer';

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  makeServer({ environment });
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);