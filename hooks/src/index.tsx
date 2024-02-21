import "./index.css"
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './views/App';
import YouCanDoIt from "./youcandoit";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    // <YouCanDoIt />
    <App />
)