import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { addDialog } from './Redux/state';
import { render } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App dialogsData={state.dialogsData} addDialog={addDialog}/>
        </React.StrictMode>
    );
}