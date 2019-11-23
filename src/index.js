import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';




ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
,
 document.querySelector('#root')
 );


