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
            <App dialogsData={store.getState().dialogPage.dialogsData} dispatch={store.dispatchEvent.bind(store)}/>
        </React.StrictMode>
    );
}

//store.subscribeFn.subscribe(rerenderTree)
store.dispatchEvent({'type': 'subscribe', 'observer': rerenderTree});

rerenderTree(store);

reportWebVitals();
