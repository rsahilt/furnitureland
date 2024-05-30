import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/AboutPage.jsx'
import Showroom from './pages/Showroom.jsx'
import Contact from './pages/ContactPage.jsx'
import Product from './pages/ProductPage.jsx'
import Dashboard from './pages/Admin/Dashboard.jsx'

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
    path: "/about",
    element: <About />,
  },
  {
    path: "/showroom",
    element: <Showroom />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
