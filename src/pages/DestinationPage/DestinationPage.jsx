import React, { useEffect, useState } from 'react';
import FeaturedTour from '../../Components/Components';
import Updates from '../../Components/Updates';
import Destination from '../../Components/Destination';
import img1 from"../../assets/canada.jpg"
import { useNavigate } from 'react-router-dom';
const DestinationPage = () => {
  const [iframeSrc, setIframeSrc] = useState("https://www.youtube.com/embed/lzhuYoXX-Sg");
  const navigate=useNavigate()
  const [formData, setFormData] = useState({});
  useEffect(() => {
      const storedFormData = JSON.parse(localStorage.getItem('formData'));
      if (storedFormData) {
          setFormData(storedFormData);
      }
  },[])



    const handleRemoveIframe = () => {
        setIframeSrc('');
      };
    const openModal = () => {
        setIframeSrc("https://www.youtube.com/embed/lzhuYoXX-Sg")
  }
  const navigateToBooking = () => {
    navigate("/booking")
  }
    return (
        <div>
                     <div className='bg-[#16377E] mb-10'>
            {/* Hero */}
            <div className="hero min-h-screen bg-[#16377E]">
                <div className="hero-content -mt-36 flex lg:flex-row flex-col-reverse w-fit">

                <div className='lg:w-1/2 w-fit my-5'>
      <h1 className="text-5xl font-bold text-white">Canada,</h1> <br />
      <h1 className="text-5xl font-bold text-white">Have a Good Journey</h1> <br />
                 <p className='text-[#DAE0EA] '>Find awesome hotel,tour,car and Activities <br />
     consectetur adipisicing elit. Autem fugit temporibus vero beatae officiis magni nam dolore amet veritatis eius. Quibusdam accusamus eos ipsa, quas cupiditate a placeat sequi asperiores.                    </p>
    </div>
    <div className='flex flex-row-reverse justify-evenly max-w-1/2 h-96 m-10'>
     <img src={img1} className=" rounded-lg shadow-2xl h-auto w-fit" />
                      
                    </div>
  
             </div>
          </div>
          
         {formData.destination &&  <div className='-mt-36 mb-36'>
            <div className='w-9/12 mx-auto bg-white p-4 rounded-lg '>
          <form className='ml-6 '  action="">
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-5'>

                <div className="form-control">
          <label className="label">
            <span className="label-text ">Your Destination</span>
          </label>
          <input   type="text" value={formData?.destination} name='destination' className="input input-bordered" disabled />
                </div>
                <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
                  <input type="text" placeholder="Activity" name='activity' className="input input-bordered" value={formData?.activity} disabled />
        </div>    <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input  type="text" placeholder="Date" name='date' className="input input-bordered" value={formData?.date} disabled />
                    </div>
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Your are</span>
          </label>
          <input  type="text" placeholder="Guests" name='guests' className="input input-bordered" value={formData?.guests} disabled/>
        </div>
                    <div className="form-control my-auto  mt-8 ">
        
                <button onClick={navigateToBooking} className='btn w-36 bg-[#f8d448] hover:bg-yellow-500'>Check</button>
        </div>
                </div>
            </form>
            </div>
          </div>}
            
        </div>
            <div className='lg:w-[1240px] mt-36'>
             <div className="hero min-h-screen">
                <div className="hero-content -mt-36 lg:w-fit  flex sm:flex-col md:flex-row lg:flex-row flex-col">
                <div className='flex flex-row-reverse justify-evenly  w-1/2 m-10'>
                            <img onClick={() => { document.getElementById('my_modal_3').showModal();openModal(); }}
 src={img1} className="cursor-pointer rounded-lg shadow-2xl h-fit lg:w-fit w-full " />
                      
       </div>
         <div className='lg:w-1/2 w-full'>
      <h1 className="text-5xl font-bold text-black">Watch The <br /> Tour Video</h1> <br />
                        <p className='text-black '>Find awesome hotel,tour,car and Activities <br />
     consectetur adipisicing elit. Autem fugit temporibus vero beatae officiis magni nam dolore amet veritatis eius. Quibusdam accusamus eos ipsa, quas cupiditate a placeat sequi asperiores.                    </p>
      <button onClick={() => { document.getElementById('my_modal_3').showModal(); openModal(); }}className='p-6 bg-yellow-400 hover:bg-yellow-500 hover:border-none py-3 mt-2 rounded-lg '>Watch Now</button>
         </div>

            </div>
            </div>
        </div>
            
        <dialog id="my_modal_3" className="modal bg-transparent">
      <div className="modal-box bg-transparent">
        <form method="dialog">
          <button onClick={handleRemoveIframe} id="closeModalBtn" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
        </form>
            <iframe width="460" height="345" src={iframeSrc} title="Canada 4K - Relaxing Music Along With Beautiful Nature Videos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
    </dialog>

            <FeaturedTour></FeaturedTour>
            <Updates></Updates>
        </div>
    );
};

export default DestinationPage;