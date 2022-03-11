import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

// bootStrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// fontAwesome
import 'font-awesome/css/font-awesome.css'


ReactDOM.render( <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter>,
    document.getElementById('root')
);