import React from 'react'
import ReactDOM from 'react-dom/client' // Ensure it says /client
import App from './App.jsx'
import './index.css'

// 1. Get the DOM element
const container = document.getElementById('root');

// 2. Create the React root
const root = ReactDOM.createRoot(container);

// 3. Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);