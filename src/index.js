import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderTree } from './render';
import state from './Redux/state';






rerenderTree(state);

reportWebVitals();
