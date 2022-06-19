import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import 'react-confirm-alert/src/react-confirm-alert.css';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);