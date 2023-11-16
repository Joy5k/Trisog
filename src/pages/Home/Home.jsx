import React from 'react';
import Destination from '../../Comopnents/Destination';
import img1 from "../../assets/partners.png"
import img2 from "../../assets/headerImg-2.avif"
import Category from '../../Comopnents/Category';
import TripPlan from '../../Comopnents/TripPlan';
import OurDestinations from '../../Comopnents/OurDestinations';
import FeaturedTour from '../../Comopnents/FeaturedTour';
import OurFacilities from '../../Comopnents/OurFacilities';
import Updates from '../../Comopnents/Updates';
const Home = () => {
    return (
        <div>
               <div className='bg-[#16377E] mb-10'>
            {/* Hero */}
            <div className="hero min-h-screen bg-[#16377E]">
                <div className="hero-content -mt-36 grid-cols-2 w-fit">

                <div className='w-1/2'>
      <h1 className="text-5xl font-bold text-white">Travel &</h1> <br />
      <h1 className="text-5xl font-bold text-white">Advancers</h1> <br />
                        <p className='text-[#DAE0EA] '>Find awesome hotel,tour,car and Activities <br />
     consectetur adipisicing elit. Autem fugit temporibus vero beatae officiis magni nam dolore amet veritatis eius. Quibusdam accusamus eos ipsa, quas cupiditate a placeat sequi asperiores.                    </p>
    </div>
     <div className='flex flex-row-reverse justify-evenly  w-1/2 m-10'>
     <img src={img2} className=" rounded-lg shadow-2xl h-fit w-fit" />
                      
                    </div>
  
  </div>
            </div>
            <div className='-mt-36 mb-20'> <Destination></Destination></div>
            
            </div>
            <Category></Category>
            <TripPlan></TripPlan>
            <OurDestinations></OurDestinations>
            <FeaturedTour></FeaturedTour>
            <OurFacilities></OurFacilities>
            <img src={img1} alt="" />
            <Updates></Updates>
     </div>
    );
};

export default Home;