import React, { useContext, useState } from 'react';
import loginImg from "../../assets/Login-pana.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
  const { LoginUser } = useContext(AuthContext)
  const location = useLocation();
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('');
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    console.log(email, password);
    LoginUser(email, password)
    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        setError('')
        navigate(from, { replace: true })
        form.reset()
        const currentUser = {
          email: user.email
        }
      }) .catch((error) => {
        setError(error.message);
      });
  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content grid grid-cols-1 lg:grid-cols-2 mx-auto">
    <div className="text-center lg:text-left">
                        <img src={ loginImg} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   <form className="card-body" onSubmit={handleLogin}>
          <h2 className='text-center text-5xl font-bold text-[#FF725E]'>Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
  
                </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
                </div>
                {error &&   <span className="text-red-500">Invalid email or password</span>}
                <div className="form-control mt-6">
                  
          <button type='submit' className="btn  bg-[#FF725E]">Login</button>
                            </div>
         <Link to='/signup' className="text-black underline hover:text-[#FF725E]">Create a new Account</Link>
      </form>
    </div>
  </div>
            </div>
     </div>
    );
};

export default Login;