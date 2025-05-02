import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {

  const { _id, name, quantity, chef, supplier, category, details, photo } = coffee;

  const handleDelete = _id => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          })
      }
    });
  }

  return (
    <div>

      <div className="hero bg-base-200 min-h-80 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photo}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Name : {name}</h1>
            <div className='flex justify-between w-full mx-auto mt-5'>
              <div>
                <p className="py-2">
                  Quantity : {quantity}
                </p>
                <p className="pb-2">
                  Supplier : {supplier}
                </p>
                <p className="pb-2">
                  Category : {category}
                </p>
              </div>
              <div className="join join-vertical space-y-2">
                <Link to={`/coffee/${_id}`}>
                  <button className="btn btn-accent join-item rounded-2xl">View</button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                  <button className="btn btn-dash join-item rounded-2xl">Edit</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error join-item rounded-2xl">X</button>
              </div>
            </div>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;