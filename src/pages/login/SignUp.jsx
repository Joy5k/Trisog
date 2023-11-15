import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import signup from "../../assets/signup.png";
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
  
  const [formData, setFormData] = useState({});
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleFormChange = (e) => {
    // Update form data when input fields change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



    const handleSignUp = (event) => {
        event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.firstName.value;
      const lastName = form.lastName.value;
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          const currentUser = {
            email:user.email
          }
          console.log(currentUser,'current user');
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content grid grid-cols-1 lg:grid-cols-2 mx-auto">
    <div className="text-center lg:text-left">
         <img src={ signup} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
 <form className="card-body"
           onSubmit={handleSignUp}                >
                <h2 className='text-center text-4xl font-bold text-[#FF725E]'>SingUp</h2>
                <p>{ error}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input onChange={handleFormChange} type="text" placeholder="Enter Your first name" name='firstName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input onChange={handleFormChange} type="text" placeholder="Enter Your Last Name" name='lastName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={handleFormChange} type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={handleFormChange} type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn  bg-[#FF725E]">Sign Up</button>
                            </div>
         <Link to='/login' className="text-black underline hover:text-[#FF725E]">Already have an account</Link>
      </form>
    </div>
  </div>
            </div>
        </div>
    );
};

export default SignUp;