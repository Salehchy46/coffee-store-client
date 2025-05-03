import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SingleCoffee from './components/SingleCoffee.jsx';
import Footer from './components/Footer.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch('http://localhost:5000/coffee'),
    errorElement: <div>
      <div className='bg-white absolute m-12'>
        <Link to='/'>
          <div className='flex'>
            <img src="https://th.bing.com/th/id/OIP.I1bY-uUBQrCp057Mz3hRxgHaEL?rs=1&pid=ImgDetMain" className='w-8' alt="" />
            <h4 className='text-xl pl-3 text-black'>Back to Home</h4>
          </div>
        </Link>
      </div>
      <img className='w-full h-dvh mb-10 rounded-2xl' src="https://i.ibb.co.com/B5yP9nP5/404.gif" alt="" />
      <Footer></Footer>
    </div>
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: (params) => fetch(`http://localhost:5000/coffee/${params.params.id}`),
  },
  {
    path: '/coffee/:id',
    element: <SingleCoffee></SingleCoffee>,
    loader: (params) => fetch(`http://localhost:5000/coffee/${params.params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
