import { Link, NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee';
import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Template from './components/Template';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-5'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <NavLink to='/addCoffee'><li><a>Add Coffee</a></li></NavLink>
              <NavLink to='/updateCoffee'><li><a>Update Coffee</a></li></NavLink>
            </ul>
          </div>
          <img src="https://i.ibb.co.com/xt9tNjvq/logo1.png" className='w-16' alt="" />
          <h1 className='text-5xl text-amber-100 ml-4'>Coffee Store</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to='/addCoffee'><li><a>Add Coffee</a></li></NavLink>
            <NavLink to='/updateCoffee'><li><a>Update Coffee</a></li></NavLink>
          </ul>
        </div>
      </div>
      <Hero></Hero>
      <Features></Features>
      
      <div className='text-center my-4'>
        <p className='my-2'>--- Sip & Savor ---</p>
        <h3 className='text-3xl font-bold'>Our Popular Products</h3>
        <Link to='/addCoffee'>
        <button className="btn my-4 bg-amber-100 text-black hover:bg-transparent hover:text-white">Add Coffee</button>
        </Link>
      </div>
      <div className='grid md:grid-cols-2 gap-4 mb-8'>
        {
          coffees.map(coffee => <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></Coffee>)
        }
      </div>
      <Template></Template>
      <Footer></Footer>
    </div>
  )
}

export default App
