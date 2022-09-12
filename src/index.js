import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(<App state={state} />);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);