import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { TodosProvider } from './contexts/TodosContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </TodosProvider>
  </React.StrictMode>
);
