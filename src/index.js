import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import state from './Redux/state';
import { addDialog } from './Redux/state';
import { updateNewDialog } from './Redux/state';
import { subscribe } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App dialogsData={state.dialogPage.dialogsData} addDialog={addDialog} defaultValue={state.dialogPage.defaultValue} updateNewDialog={updateNewDialog}/>
        </React.StrictMode>
    );
}

subscribe(rerenderTree)

rerenderTree(state);

reportWebVitals();
