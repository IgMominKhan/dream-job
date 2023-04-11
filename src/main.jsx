import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import AppliedJobs from './components/AppliedJobs.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import './index.css'

// routes
const route = createBrowserRouter([{
  path: '/',
  element: <App />,
  loader: () => fetch('data.json'),
  errorElement: <ErrorPage />,
  children: [{
    path: '/',
    element: <Home />,
  },
  {
    path: 'jobs/:paramId',
    element: <JobDetails />
  },
  {
    path: '/applied-jobs',
    element: <AppliedJobs/>
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
)
