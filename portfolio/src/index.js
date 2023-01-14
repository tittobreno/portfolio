import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main';
import { GlobalProvider } from './contexts/GlobalContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  </React.StrictMode>
);

