import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import img1 from"../assets/logo1.png";
import img2 from"../assets/logo2.png";
import img3 from"../assets/logo3.png";
import img4 from "../assets/logo4.png";

const OurFacilities = () => {
    return (
        <div  className='lg:w-[1240px] mx-auto '>
              <div className='mt-36'>
             <div className="hero min-h-screen">
                <div className="hero-content -mt-36 grid-cols-2 w-fit">
     
                    <div className='w-1/2 pr-10'>
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
                        <div className=' grid sm grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="card w-36 h-36 bg-base-100  rounded-none">
  <figure className="">
    <img src={img1} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
                </div>
                
 <div className="card w-36 h-36 bg-base-100 rounded-none">
  <figure className="">
    <img src={img2} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
 <div className="card w-36 h-36 bg-base-100 rounded-none">
  <figure className="">
    <img src={img3} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
 <div className="card w-36 h-36 bg-base-100 rounded-none">
  <figure className="">
    <img src={img4} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>           
       </div>         
    
  </div>
            </div>
        </div>
      
        </div>
    );
};

export default OurFacilities;