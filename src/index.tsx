import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom'
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      
      </QueryClientProvider>
   
    </Provider>
   
  </React.StrictMode>
);

