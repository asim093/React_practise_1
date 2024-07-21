// src/main.jsx
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ContextProvider } from './pages/context.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
