import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common/common.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/home';
import Login from './pages/login';
import Administrativo from './pages/administrativo';
import Agendar from './pages/agendar';
import Agendamentos from './pages/agendamentos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/administrativo' element={<Administrativo />} />
      <Route path='/agendar' element={<Agendar />} />
      <Route path='/agendamentos' element={<Agendamentos />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
