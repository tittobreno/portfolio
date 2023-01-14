import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes from './routes';
import { GlobalProvider } from './contexts/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);

