import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import BookMarks from './Pages/BookMarks.jsx';
import Root from './Root/Root.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/blog",
        element:<Blog></Blog>,
        loader:() => fetch("https://dev.to/api/articles?per_page=20&top=7")
      },
      {
        path:"/bookmarks",
        element:<BookMarks></BookMarks>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
