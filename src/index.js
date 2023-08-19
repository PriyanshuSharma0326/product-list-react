import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import { CategoryContextProvider } from './context/category-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CategoryContextProvider>
            <App />
        </CategoryContextProvider>
    </React.StrictMode>
);
