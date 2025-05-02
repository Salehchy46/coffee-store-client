import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/RkKPsQsG/3.png)",
        borderRadius: '30px',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-full justify-end text-neutral-content">
        <div className="w-1/2 ml-auto text-left">
          <h1 className="mb-5 text-3xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-amber-100 text-black hover:bg-transparent hover:text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
