import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     <li><Link to='/' >Home</Link ></li>
      <li><Link to="/about">About</Link ></li>
      <li><Link to="/about">Tour</Link ></li>
      <li><Link to="/about">Destination</Link ></li>
      <li><Link to="/about">Blog</Link ></li>
      <li><Link to="/about">Pages</Link ></li>
      <li><Link to="/about">Contact</Link ></li>
      </ul>
    </div>
    <Link  className=" text-xl font-bold">Trisog</Link >
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><Link to='/' >Home</Link ></li>
      <li><Link to="/about">About</Link ></li>
      <li><Link to="/about">Tour</Link ></li>
      <li><Link to="/about">Destination</Link ></li>
      <li><Link to="/about">Blog</Link ></li>
      <li><Link to="/about">Pages</Link ></li>
      <li><Link to="/about">Contact</Link ></li>
    </ul>
                </div>
                
                <div className="navbar-end">

{/* user profile */}
                <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>                

    <Link to="/login" className="btn">login</Link >
                    <Link to="/signup" className="btn">signUp</Link >
                    
  </div>
</div>
        </div>
    );
};

export default Navbar;