import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import ResourcePage from './pages/ResourcePage';
import ResourceDetail from './components/ResourceDetail';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/people', element: <ResourcePage kind="people" /> },
      { path: '/planets', element: <ResourcePage kind="planets" /> },
      { path: '/species', element: <ResourcePage kind="species" /> },
      { path: '/starships', element: <ResourcePage kind="starships" /> },
      { path: '/vehicles', element: <ResourcePage kind="vehicles" /> },
      { path: '/:kind/:id', element: <ResourceDetail /> }, // detail
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
