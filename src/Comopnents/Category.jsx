import React from 'react';
import img1 from "../assets/category1.png"
import img2 from "../assets/category2.png"
import img3 from "../assets/category3.png"
import img4 from "../assets/category4.png"
import img5 from "../assets/category5.png"
import img6 from "../assets/category6.png"
const Category = () => {
    return (
        <div className='w-[1240px] mx-auto'>
            <h4 className='text-center italic text-yellow-400'>Brows by Category</h4>
            <h3 className='text-2xl font-extrabold text-center'>Pick A Tour Type</h3>

            <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 my-16 ml-5'>
                
 <div className="card w-36 h-36 bg-base-100 shadow-xl">
  <figure className="">
    <img src={img1} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
 <div className="card w-36 h-36 bg-base-100 shadow-xl">
  <figure className="">
    <img src={img2} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
 <div className="card w-36 h-36 bg-base-100 shadow-xl">
  <figure className="">
    <img src={img3} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
 <div className="card w-36 h-36 bg-base-100 shadow-xl">
  <figure className="">
    <img src={img4} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
 <div className="card w-36 h-36 bg-base-100 shadow-xl">
  <figure className="">
    <img src={img5} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
 <div className="card w-36 h-36 bg-base-100 shadow-xl">
  <figure className="">
    <img src={img1} alt="categoryImg" className="rounded-xl" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="font-bold text-center">City Tour</h2>
    <p>10 Tours+</p>
   
  </div>
</div>
</div>
        </div>
    );
};

export default Category;