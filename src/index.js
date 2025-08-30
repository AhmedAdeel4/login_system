import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

// ==================================================================
// npm i -D react-router-dom@latest
// npm i bootstrap@latest
// npm i axios
// npm i recoil
// npm i font-awesome
// npm i formik
// npm install react-hook-form
// npm i yup
// npm i react-bootstrap
// npm i react@18 react-dom@18
// npm update 
// npm audit fix
// npm start 

