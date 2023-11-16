import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { FaSadCry } from 'react-icons/fa';
import Spinner from '../../Components/Spinner/Spinner';

const Booked = () => {
  const navigate=useNavigate()
  const{user,logOutUser,setLoading,loading}=useContext(AuthContext)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [formData, setFormData] = useState({})
  const [isSaved, setIsSaved] = useState(false)
  console.log(user.email);
  const token = localStorage.getItem("accessToken")
  console.log(token,'token');
  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then(res=>res.json())
      .then((data) => {
        setFormData(data[0]);
        console.log(data[0],'getting data booking data from backend');
      })
      .catch(function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          // return logOutUser();
        }
        console.log(error);
      });
  }, [user.email, logOutUser]);


  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem('formData'))
    // setFormData(bookingData)
    setIsSaved(bookingData?.isSaved)
  }, [setIsSaved])
  
  const handleBooking = (id) => {
    localStorage.removeItem("formData")
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
      headers:{
        authorization: `bearer${localStorage.getItem('accessToken')}`
    }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log('ok');
        swal("Delete", "Successfully Delete", "success");
    setFormData({})
    navigate("/")
      })
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

  console.log(formData);

    return (
        <div className='h-screen'>
          {loading ?<Spinner></Spinner>:  <div className="overflow-x-auto ">
       <>
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
              {/* <div className="mask mask-squircle w-12 h-12">
                <img src="https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" alt="Avatar Tailwind CSS Component" />
              </div> */}
            </div>
            <div>
             {formData?.firstName ? <div className="font-bold">{formData?.firstName} { formData?.lastName}</div>: <p className='font-bold'>Guest</p> }
            
            </div>
          </div>
        </td>
        <td>
         {user?.email}
        </td>
             <td>{formData?.phone }</td>
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
         {isSaved ?  <button onClick={()=>handleBooking(formData?._id)} className="btn ml-2 bg-red-400 btn-xs text-white ">Cancel Processing</button>: <button onClick={()=>handleBooking(formData?._id)} className="btn bg-red-400 btn-xs text-white ">Delete</button>}
        </th>
        </th>
      </tr>
    </tbody>
 
  </table>
            </>


</div>}
        </div>
    );
};

export default Booked;