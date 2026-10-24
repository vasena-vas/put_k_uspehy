import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './styles.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Вот эта строчка с basename решит проблему с "Страница не найдена" */}
    <BrowserRouter basename="/put_k_uspehy/"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);