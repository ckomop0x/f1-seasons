import React from 'react';
import { render } from 'react-dom'
import App from './scripts/App';
const root = document.getElementById('root')

// declare let module: any;

if (root) {
  render(<App />, root)
}
