import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/store';
import store2 from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={store2.getState()} addPost={store2.addPost.bind(store2)} updateNewPostText={store2.updateNewPostText.bind(store2)} dialogMessages={store.getState().dialogPage.dialogMessages} dialogsData={store.getState().dialogPage.dialogsData} dispatch={store.dispatchEvent.bind(store)}/>
        </React.StrictMode>
    );
}

store.dispatchEvent({'type': 'subscribe', 'observer': rerenderTree});

//rerenderTree(store2);
rerenderTree(store2.getState());
store2.subscribe(rerenderTree);

reportWebVitals();
