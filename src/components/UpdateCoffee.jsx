import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from './Footer';

const UpdateCoffee = () => {

  const coffee = useLoaderData();
  const { _id, name, quantity, chef, supplier, category, details, photo } = coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, chef, supplier, category, details, photo };
    console.log(updatedCoffee);

    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Successful!',
            text: 'Coffee Updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

  return (
    <div className='bg-[#f4f3f0] lg:p-20'>

      <div>
        <Link to='/'>
          <div className='flex'>
            <img src="https://th.bing.com/th/id/OIP.I1bY-uUBQrCp057Mz3hRxgHaEL?rs=1&pid=ImgDetMain" className='w-8' alt="" />
            <h4 className='text-xl pl-3 text-black'>Back to Home</h4>
          </div>
        </Link>

      </div>
      <h2 className='font-bold text-3xl text-center text-black pb-4'>Update Coffee : {name}</h2>
      <p className='text-black text-center w-2/3 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <form onSubmit={handleUpdateCoffee} className='mb-10'>
        <div className="w-full shadow-2xl p-5">
          <div className="flex justify-around mb-8">
            <div className='form-control w-1/2'>
              <label className="label text-black">Coffee Name</label>
              <input type="text" name='name' className="input w-full" defaultValue={name} placeholder="Coffee Name" />
            </div>
            <div className='form-control w-1/2 ml-4'>
              <label className="label text-black">Available Quantity</label>
              <input type="text" name='quantity' className="input w-full" defaultValue={quantity} placeholder="Available Quantity" />
            </div>
          </div>
          <div className="flex justify-around mb-8">
            <div className='form-control w-1/2'>
              <label className="label text-black">Chef</label>
              <input type="text" name='chef' className="input w-full" defaultValue={chef} placeholder="Chef" />
            </div>
            <div className='form-control w-1/2 ml-4'>
              <label className="label text-black">Supplier</label>
              <input type="text" name='supplier' className="input w-full" defaultValue={supplier} placeholder="Supplier" />
            </div>
          </div>
          <div className="flex justify-around mb-8">
            <div className='form-control w-1/2'>
              <label className="label text-black">Category</label>
              <input type="text" name='category' className="input w-full" defaultValue={category} placeholder="Category" />
            </div>
            <div className='form-control w-1/2 ml-4'>
              <label className="label text-black">Details</label>
              <input type="text" name='details' className="input w-full" defaultValue={details} placeholder="Details" />
            </div>
          </div>
          <div className="mb-8">
            <div className='form-control w-full'>
              <label className="label text-black">Photo</label>
              <input type="text" name='photo' className="input w-full" defaultValue={photo} placeholder="Photo" />
            </div>
          </div>
          <input type="submit" className="btn btn-block bg-amber-100 text-black" value="Update Coffee" />
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;