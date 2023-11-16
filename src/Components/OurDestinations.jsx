import React from 'react';
import img1 from "../assets/destinationImg-1.png";
import img2 from "../assets/destinationImg-2.png";
import img3 from "../assets/destinationImg-3.png";
import img4 from "../assets/destinationImg-4.png";
const OurDestinations = () => {
    return (
        <div className='lg:w-[1240px] mx-auto my-10'>
            <p className='italic text-[#36528F] text-xl'> Destinations</p>
            <h3 className='text-4xl font-bold'>Top Destinations</h3>

            <div className='mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto w-fit'>
            <div className="card card-compact w-60 ">
  <figure><img src={img1} alt="Img" /></figure>
  <div className="card-body">
    <h2 className="card-title">United Kingdom</h2>
    <p>147,256 Travelers</p>
 
  </div>
                </div>
                
            <div className="card card-compact w-60 ">
  <figure><img src={img2} alt="Img" /></figure>
  <div className="card-body">
    <h2 className="card-title">United Kingdom</h2>
    <p>147,256 Travelers</p>
 
  </div>
            </div>
            <div className="card card-compact w-60 ">
  <figure><img src={img3} alt="Img" /></figure>
  <div className="card-body">
    <h2 className="card-title">United Kingdom</h2>
    <p>147,256 Travelers</p>
 
  </div>
            </div>
            <div className="card card-compact w-60 ">
  <figure><img src={img4} alt="Img" /></figure>
  <div className="card-body">
    <h2 className="card-title">United Kingdom</h2>
    <p>147,256 Travelers</p>
 
  </div>
            </div>
            </div>
        </div>
    );
};

export default OurDestinations;