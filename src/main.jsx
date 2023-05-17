import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Invetory/Inventory';
import Login from './Components/Login/Login';
import { loadCart } from './Components/DataLoader/DataLoader';
import Checkout from './Components/Checkout/Checkout';
import SingUp from './Components/SingUp/SingUp';
import UserContext from './Components/UserContext/UserContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<PrivateRoute> <Shop></Shop></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/total-products')
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>,
        loader: loadCart
        
      },
      {
        path: '/inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      }

    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
    <RouterProvider router={router} />

    </UserContext>
   
  </React.StrictMode>,
)
