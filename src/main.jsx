import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. Hier den Import hinzufügen:
import { inject } from '@vercel/analytics';

// 2. Hier die Funktion aufrufen:
inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
