import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './styles/common.scss'
import PageIndex from './pages/'
import PageStory from './pages/Story'


const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: (
      <PageIndex />
    )
  },
  {
    path: `${process.env.PUBLIC_URL}/posts/`,
    element: (
      <PageStory />
    ),
    children: [{ path: ":id", element: <PageStory /> }],
  },
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
