import React from 'react';
import img1 from "../assets/tour_1.png"
import img2 from "../assets/tour_2.png"
import img3 from "../assets/tour_3.png"
import img4 from "../assets/tour_4.png"
import { IoIosStar } from "react-icons/io";

const FeaturedTour = () => {
    return (
        <div className='bg-[#16377E] h-screen p-16'>
            <p className='text-center italic text-[#fff]'>Tours</p>
            <h3 className='text-center font-bold text-4xl text-[#DAE0EA]'>Featured Tours</h3>
            <div className='ml-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
            <div className=" w-60  bg-base-100 mt-16">
  <figure><img className='w-full' src={img1} alt="Img" /></figure>
  <div className="p-4">
  <span className='text-gray-400 '>Australia</span>
    <p className='font-extrabold text-xl my-2'>Wonder of The West <br /> Coast & Kimberly</p>
    <div className="card-actions flex  justify-between">
                            <div className="flex gap-2 justify-start">
                            <div className='bg-[#F8D448] px-1 rounded-md flex align-middle'><IoIosStar className='m-1 text-sm' /><p className='font-semibold text-sm'>4.5</p></div>
                            <div className='font-semibold text-gray-500 text-sm'>16 Reviews</div>
                            </div> 
                            <div className="badge badge-outline mt-1 text-sm">7 days</div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between'>
                            <p className=''>Starting From</p>
                            <p className='italic font-bold'>$350</p>
                        </div>
  </div>
                </div>
                
            <div className=" w-64 bg-base-100 mt-16">
  <figure><img className='w-full' src={img2} alt="Img" /></figure>
  <div className="p-4">
  <span className='text-gray-400 '>Greater London, UK</span>
    <p className='font-extrabold text-xl my-2'>Wonder of The West <br /> Coast & Kimberly</p>
    <div className="card-actions flex  justify-between">
                            <div className="flex gap-2 justify-start">
                            <div className='bg-[#F8D448] px-1 rounded-md flex align-middle'><IoIosStar className='m-1 text-sm' /><p className='font-semibold text-sm'>4.5</p></div>
                            <div className='font-semibold text-gray-500 text-sm'>16 Reviews</div>
                            </div> 
                            <div className="badge badge-outline mt-1 text-sm">7 days</div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between'>
                            <p className=''>Starting From</p>
                            <p className='italic font-bold'>$350</p>
                        </div>
  </div>
                </div>
                
            <div className=" w-64 bg-base-100 mt-16">
  <figure><img className='w-full' src={img3} alt="Img" /></figure>
  <div className="p-4">
  <span className='text-gray-400 '>Budapest,Hungary</span>
    <p className='font-extrabold text-xl my-2'>Wonder of The West <br /> Coast & Kimberly</p>
    <div className="card-actions flex  justify-between">
                            <div className="flex gap-2 justify-start">
                            <div className='bg-[#F8D448] px-1 rounded-md flex align-middle'><IoIosStar className='m-1 text-sm' /><p className='font-semibold text-sm'>4.5</p></div>
                            <div className='font-semibold text-gray-500 text-sm'>16 Reviews</div>
                            </div> 
                            <div className="badge badge-outline mt-1 text-sm">7 days</div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between'>
                            <p className=''>Starting From</p>
                            <p className='italic font-bold'>$350</p>
                        </div>
  </div>
                </div>
                
            <div className=" w-64 bg-base-100 mt-16">
  <figure><img className='w-full' src={img4} alt="Img" /></figure>
  <div className="p-4">
  <span className='text-gray-400 '>Oman</span>
    <p className='font-extrabold text-xl my-2'>Wonder of The West <br /> Coast & Kimberly</p>
    <div className="card-actions flex  justify-between">
                            <div className="flex gap-2 justify-start">
                            <div className='bg-[#F8D448] px-1 rounded-md flex align-middle'><IoIosStar className='m-1 text-sm' /><p className='font-semibold text-sm'>4.5</p></div>
                            <div className='font-semibold text-gray-500 text-sm'>16 Reviews</div>
                            </div> 
                            <div className="badge badge-outline mt-1 text-sm">7 days</div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between'>
                            <p className=''>Starting From</p>
                            <p className='italic font-bold'>$350</p>
                        </div>
  </div>
             </div>
            </div>
        </div>
    );
};

export default FeaturedTour;