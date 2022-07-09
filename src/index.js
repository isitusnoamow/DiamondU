import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clean from './Clean';
import Protect from './Protect';
import reportWebVitals from './reportWebVitals';
import { MemoryRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="clean" element={<Clean />} />
        <Route path="protect" element={<Protect />} />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
