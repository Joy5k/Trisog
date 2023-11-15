import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
const Destination = () => {
    const [formData, setFormData] = useState({});
    const [destinations, setDestinations] = useState([
        { id: 1, name: 'New york ' },
        { id: 2, name: 'California ' },
    ]);
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
          localStorage.setItem('formData', JSON.stringify(formData));
        swal("Success", "Successfully added", "success");

    }
    
    return (
        <div className='w-9/12 mx-auto bg-white p-4 rounded-lg '>
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
            </form>
        </div>
    );
};

export default Destination;