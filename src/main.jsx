import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles.css';
import App from './App';
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>);
<BrowserRouter basename={import.meta.env.BASE_URL}>
  <App />
</BrowserRouter>