import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './css/index.css';


import { TitleContextProvider } from './contexts/TitleContext.tsx';
import { ThemeContextProvider } from './contexts/ThemeContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TitleContextProvider>
        <App />
      </TitleContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
