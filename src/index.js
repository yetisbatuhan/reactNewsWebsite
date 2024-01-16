import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header/Header';
import Marque from './components/Marquee/Marque';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header />
  <Marque />
    <App />
  </React.StrictMode>
);


