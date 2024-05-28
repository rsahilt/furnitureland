import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/AboutPage.jsx'
import Showroom from './pages/Showroom.jsx'
import Contact from './pages/ContactPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/showroom",
    element: <Showroom />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
