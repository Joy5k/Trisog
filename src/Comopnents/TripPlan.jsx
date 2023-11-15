import React from 'react';
import banner from '../assets/Home-banner.png'
const TripPlan = () => {
    return (
        <div className='mt-36'>
             <div className="hero min-h-screen">
                <div className="hero-content -mt-36 grid-cols-2 w-fit">
                <div className='flex flex-row-reverse justify-evenly  w-1/2 m-10'>
     <img src={banner} className=" rounded-lg shadow-2xl h-fit w-fit" />
                      
       </div>
                    <div className='w-1/2'>
                        <span className='italic  text-[#16377D]'>Who choose us</span>
      <h1 className="text-5xl font-bold text-black">Plan Your Trip</h1> <br />
      <h1 className="text-5xl font-bold text-black">With Advancers</h1> <br />
                        <p className='text-black '>Find awesome hotel,tour,car and Activities <br />
     consectetur adipisicing elit. Autem fugit temporibus vero beatae officiis magni nam dolore amet veritatis eius. Quibusdam accusamus eos ipsa, quas cupiditate a placeat sequi asperiores.                    </p>
    </div>
    
  </div>
            </div>
        </div>
    );
};

export default TripPlan;