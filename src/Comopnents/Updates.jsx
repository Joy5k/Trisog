import React from 'react';
import img1 from "../assets/travel1.png"
import img2 from "../assets/travel2.png"
import img3 from "../assets/travel3.png"
import img4 from "../assets/travel4.png"
import advencer from "../assets/advencer1.png"
import advencer2 from "../assets/advencer2.png"
import advencer3 from "../assets/advencer3.png"
import advencer4 from "../assets/advencer4.png"
import advencer5 from "../assets/advencer5.png"
const Updates = () => {
    return (
        <div className='my-10 w-[1240px] mx-auto'>
            <p className='italic text-blue-500 text-center'>Updates</p>
            <h2 className='text-4xl text-center font-extrabold'>Lates Travel Guid</h2>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10 p-16'>
{/* first Card */}
            <div className="card card-side   w-fit h-40 rounded-none">
                 <figure><img className='h-full' src={ img1} alt="Movie"/></figure>
  <div className="card-body">
    <p>Jan 13,2023</p>
    <h2 className="card-title font-bold">The Impact of The covid-19 <br />travel and tourism industry</h2>
  
  </div>
                </div>
 {/* second Card */}
            <div className="card card-side   w-fit h-40 rounded-none">
                 <figure><img className='h-full' src={ img2} alt="Movie"/></figure>
  <div className="card-body">
    <p>Jan 13,2023</p>
    <h2 className="card-title font-bold">The Impact of The covid-19 <br />travel and tourism industry</h2>
  
  </div>
                </div>
 {/* Third Card             */}
            <div className="card card-side   w-fit h-40 rounded-none">
                 <figure><img className='h-full' src={ img3} alt="Movie"/></figure>
  <div className="card-body">
    <p>Jan 13,2023</p>
    <h2 className="card-title font-bold">The Impact of The covid-19 <br />travel and tourism industry</h2>
  
  </div>
                </div>
   {/* Fourth Card              */}
            <div className="card card-side   w-fit h-40 rounded-none">
                 <figure><img className='h-full' src={ img4} alt="Movie"/></figure>
  <div className="card-body">
    <p>Jan 13,2023</p>
    <h2 className="card-title font-bold">The Impact of The covid-19 <br />travel and tourism industry</h2>
  
  </div>
            </div>
        </div>
            <hr />

    {/* Adding 4 extra Image  */}
            <div className='grid sm:grid-cols-3 lg:grid-cols-5 px-10 mx-auto mt-10'>
        <img src={advencer} alt="" />
        <img src={advencer2} alt="" />
        <img src={advencer3} alt="" />
        <img src={advencer4} alt="" />
        <img src={advencer5} alt="" />
            </div>
        </div>
    );
};

export default Updates;