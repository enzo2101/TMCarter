import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Checkout } from './pages/Checkout.tsx';
import { Cards } from './pages/Cards.tsx';
import { Proxies } from './pages/Proxies.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/checkout"
          element={<Checkout/>}
        />
        <Route path="cards" element={<Cards/>} />
        <Route path="proxies" element={<Proxies/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
