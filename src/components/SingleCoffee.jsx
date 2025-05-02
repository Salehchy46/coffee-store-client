import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from './Footer';

const SingleCoffee = () => {

  const singleCoffee = useLoaderData();

  return (
    <div className=''>
      <div className="hero bg-amber-100 text-black min-h-screen mb-10 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={singleCoffee.photo}
            className="max-w-sm rounded-lg shadow-2xl w-80 h-96"
          />
          <div className='max-w-sm rounded-lg shadow-2xl w-96 h-96 py-8 px-4'>
            <h1 className="text-5xl font-bold">{singleCoffee.name}</h1>
            <div className='pt-2 flex items-center'>
              <p className=" font-bold">Quantity : </p>
              <p className='pl-4'>{singleCoffee.quantity}</p>
            </div>
            <div className='flex items-center'>
              <p className="py-2 font-bold">Chef : </p>
              <p className='pl-4'>{singleCoffee.chef}</p>
            </div>
            <div className='flex items-center'>
              <p className="font-bold">Supplier : </p>
              <p className='pl-4'>{singleCoffee.supplier}</p>
            </div>
            <div className='flex items-center'>
              <p className="py-2 font-bold">Category : </p>
              <p className='pl-4'>{singleCoffee.category}</p>
            </div>
            <div className='flex items-center'>
              <p className="pb-2 font-bold">Details : </p>
              <p className='pl-4'>{singleCoffee.details}</p>
            </div>
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleCoffee;