import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from 'context/ThemeContext';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
