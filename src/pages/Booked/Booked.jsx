import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Booked = () => {
  const navigate=useNavigate()
  const{user}=useContext(AuthContext)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const[formData,setFormData] = useState({})
  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem('formData'))
  setFormData(bookingData)
  },[setFormData])
  const handleBooking = () => {
    localStorage.removeItem("formData")
    swal("Delete", "Successfully Delete", "success");
    setFormData({})
    navigate("/")
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
          <button onClick={()=>handleBooking()} className="btn bg-red-400 btn-xs text-white ">Delete</button>
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