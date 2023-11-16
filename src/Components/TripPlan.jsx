import React from 'react';
import banner from '../assets/Home-banner.png'
import { GiCheckMark } from "react-icons/gi";

const TripPlan = () => {
    return (
        <div className='lg:w-[1240px] mt-36'>
             <div className="hero min-h-screen">
                <div className="hero-content -mt-36 lg:w-fit  flex sm:flex-col md:flex-row lg:flex-row flex-col">
                <div className='flex flex-row-reverse justify-evenly  w-1/2 m-10'>
     <img src={banner} className=" rounded-lg shadow-2xl h-fit lg:w-fit w-full " />
                      
       </div>
         <div className='lg:w-1/2 w-full'>
          <span className='italic  text-[#16377D]'>Who choose us</span>
      <h1 className="text-5xl font-bold text-black">Plan Your Trip</h1> <br />
      <h1 className="text-5xl font-bold text-black">With Advancers</h1> <br />
                        <p className='text-black '>Find awesome hotel,tour,car and Activities <br />
     consectetur adipisicing elit. Autem fugit temporibus vero beatae officiis magni nam dolore amet veritatis eius. Quibusdam accusamus eos ipsa, quas cupiditate a placeat sequi asperiores.                    </p>
   
                        <div className='grid grid-cols-2 my-5'>
  <p className='flex align-middle font-bold text-[#353F5D]'> <span><GiCheckMark className='mt-1 mr-1' /></span> <span>Travel Plan</span></p>
  <p className='text-[#353F5D] flex align-middle font-bold'> <span><GiCheckMark className='mt-1 mr-1' /></span> <span>Cheap Rates</span></p>
  <p className='text-[#353F5D] flex align-middle font-bold'> <span><GiCheckMark className='mt-1 mr-1' /></span> <span>Hand-Pick Tour</span></p>
  <p className='text-[#353F5D] flex align-middle font-bold'> <span><GiCheckMark className='mt-1 mr-1' /></span> <span>Private Guide</span></p>
                  
                        </div>
                        <button className='p-6 py-3 mt-2 rounded-lg border border-black'>Contact Us</button>
                    </div>
    
  </div>
            </div>
        </div>
    );
};

export default TripPlan;