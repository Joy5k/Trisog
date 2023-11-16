import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { FaSadCry } from 'react-icons/fa';

const Booked = () => {
  const navigate=useNavigate()
  const{user}=useContext(AuthContext)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [formData, setFormData] = useState({})
  const [isSaved,setIsSaved] = useState(false)
  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem('formData'))
    setFormData(bookingData)
    setIsSaved(bookingData?.isSaved)
  },[setFormData])
  const handleBooking = () => {
    localStorage.removeItem("formData")
    swal("Delete", "Successfully Delete", "success");
    setFormData({})
    navigate("/")
  }
  const handleBookingSave = () => {
    swal("Success", "Successfully Delete", "success");
    setIsSaved(true)
    const existingData = localStorage.getItem('formData');
    let parsedData;
    if (existingData) {
      parsedData = JSON.parse(existingData);
    } else {
      parsedData = {}; // Create an empty object if no existing data
    }
    const newData = {
      isSaved: true,
    };
    
    parsedData = { ...parsedData, ...newData };
    const updatedDataString = JSON.stringify(parsedData);
    localStorage.setItem('formData', updatedDataString);


  }
  console.log(user);
    return (
        <div className='h-screen'>
            <div className="overflow-x-auto ">
          {
            formData && user ? <>
              <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>Phone </th>
        <th>Date</th>
       <th>Destination</th>
                    <th>Guests</th>
                   
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{userInfo?.firstName} { userInfo?.lastName}</div>
          
            </div>
          </div>
        </td>
        <td>
         {user?.email}
        </td>
             <td>{userInfo?.phone }</td>
        <th>
          <td>{formData?.date}</td>
        </th>
        <th>
          <td>{formData?.destination}</td>
        </th>
        <th>
          <td>{formData?.guests}</td>
        </th>
        <th>
        <th>
                        {
                          isSaved ?  <button onClick={()=>handleBookingSave()} className="btn bg-green-400 btn-xs text-white ml-2" disabled>Saved</button>: <button onClick={()=>handleBookingSave()} className="btn bg-green-500 btn-xs text-white mr-2 ">Save</button>
         }
         {isSaved ?  <button onClick={()=>handleBooking()} className="btn ml-2 bg-red-400 btn-xs text-white ">Cancel Processing</button>: <button onClick={()=>handleBooking()} className="btn bg-red-400 btn-xs text-white ">Delete</button>}
        </th>
        </th>
      </tr>
    </tbody>
 
  </table>
            </> : <div className='h-screen w-11/12 mx-auto'><p className='text-4xl text-center font-extrabold mt-20'>Select any destination first <Link to="/" className="underline  text-blue-500 text-center  ">continue </Link> </p>
              </div>

}
</div>
        </div>
    );
};

export default Booked;