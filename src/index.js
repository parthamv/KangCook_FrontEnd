import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Get the root element from your HTML
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app inside the root
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
