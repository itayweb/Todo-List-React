import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TodosProvider } from './contexts/TodosContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosProvider>
      <BrowserRouter basename='/Todo-List-React'>
        <App />
      </BrowserRouter>
    </TodosProvider>
  </React.StrictMode>
);
