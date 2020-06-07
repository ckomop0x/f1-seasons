import React from 'react';
import { render } from 'react-dom';
import App from './scripts/App';
const root = document.getElementById('root');

if (root) {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}
