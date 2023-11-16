import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../context/AuthProvider';
import "./style/Destination.css"
import { useNavigate } from 'react-router-dom';

const Destination = () => {
  const navigate=useNavigate()
  const{matchedDestination}=useContext(AuthContext)
  const [formData, setFormData] = useState({});
  
  
  const storedFormData = JSON.parse(localStorage.getItem('formData'));
  const data = { ...formData, ...storedFormData }
  
  console.log(data,'sending the data');
    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            setFormData(storedFormData);
        }
    },[])
    const handleFormChange = (e) => {
        // Update form data when input fields change
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    const handleDestination = (event) => {
        event.preventDefault();
      localStorage.setItem('formData', JSON.stringify(data));
      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
       swal('Yeah',"Saved data on server","success")
       navigate('/booking')
        });
    }
    
    return (
      <div className='w-9/12 mx-auto bg-white p-4 rounded-lg '>
        
        {matchedDestination ?
          <form className='ml-6 ' onSubmit={handleDestination} action="">
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-5'>

                <div className="form-control">
          <label className="label">
            <span className="label-text ">Destination</span>
          </label>
          <input onChange={handleFormChange}  type="text" placeholder="Where to go?" name='destination' className="input input-bordered" required />
                </div>
                <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input onChange={handleFormChange} type="text" placeholder="Activity" name='activity' className="input input-bordered" required />
        </div>    <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input onChange={handleFormChange} type="date" placeholder="Date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Guests</span>
          </label>
          <input onChange={handleFormChange} type="text" placeholder="Guests" name='guests' className="input input-bordered" required />
        </div>
                    <div className="form-control my-auto  mt-8 ">
        
                <button type='submit' className='btn w-36 bg-[#f8d448] hover:bg-yellow-500'>Search</button>
        </div>
                </div>
            </form> : <p className='text-yellow-400 font-bold sliding-text'>Search your desire Destination on search bar</p> }
        </div>
    );
};

export default Destination;