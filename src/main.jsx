import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import AuthProvider from './Providers/AuthProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    }]
  },

  {
    path: "login",
    element: <Login></Login>
  
  },
  {
    path: "register",
    element: <SignUp></SignUp>
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster toastOptions={{
    success: {
      style: {
        background: 'green',
        color: 'white'
      },
    },
    error: {
      style: {
        background: 'red',
        color: 'white'
      },
    },
  }}/>
     <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
