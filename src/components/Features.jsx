import React from 'react';

const Features = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4">
      {/* Card 1 */}
      <div className="card bg-amber-100 text-black shadow-sm flex-shrink-0">
        <figure>
          <img
            className=' mt-6'
            src="https://i.ibb.co.com/B5vj3n48/1.png"
            alt="Shoes"bmb
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Awesome Aroma</h2>
          <p>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="card bg-amber-100 text-black shadow-sm flex-shrink-0">
        <figure>
          <img
            className=' mt-6'
            src="https://i.ibb.co.com/B2gFgjfF/2.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">High Quality</h2>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card bg-amber-100 text-black shadow-sm flex-shrink-0">
        <figure>
          <img
            className=' mt-6'
            src="https://i.ibb.co.com/pg40Stq/3.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Pure Grades</h2>
          <p>The coffee is made of the green coffee beans which you will love</p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="card bg-amber-100 text-black shadow-sm flex-shrink-0">
        <figure>
          <img
            className=' mt-6'
            src="https://i.ibb.co.com/twCJK71q/4.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Proper Roasting</h2>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
