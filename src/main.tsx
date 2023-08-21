import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { AuthenticatedLayout, UnauthenticatedLayout } from './layouts'
import { Home, Signin, Signup } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticatedLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },{
    path: '/',
    element: <UnauthenticatedLayout/>,
    children: [
      {
        path: '/signin',
        element: <Signin/>
      },{
        path: '/signup',
        element: <Signup/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
