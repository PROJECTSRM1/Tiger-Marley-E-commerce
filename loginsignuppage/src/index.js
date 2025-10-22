import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 IMPORT THIS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* 👈 WRAP YOUR APP COMPONENT HERE */}
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);