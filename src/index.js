import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (store) => {
    root.render(
        <React.StrictMode>
            <App dialogsData={store.getState().dialogPage.dialogsData} addDialog={store.addDialogFn.addDialog} defaultValue={store.getState().dialogPage.defaultValueFn} updateNewDialog={store.updateNewDialogFn.updateNewDialog}/>
        </React.StrictMode>
    );
}

store.subscribeFn.subscribe(rerenderTree)

rerenderTree(store);

reportWebVitals();
