import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store3 from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store3.dispatchEvent.bind(store3)}/>
        </React.StrictMode>
    );
}

//store.dispatchEvent({'type': 'subscribe', 'observer': rerenderTree});

//rerenderTree(store2);
rerenderTree(store3.getState());
store3.subscribe(() => {
    let state = store3.getState();
    rerenderTree(state)
});

reportWebVitals();
