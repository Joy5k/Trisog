import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { LuSearch } from "react-icons/lu";
import Destination from '../../Components/Destination';
import swal from 'sweetalert';


const Navbar = () => {
  const { user, logOutUser,matchedDestination,setMatchedDestination } = useContext(AuthContext)
  const [searchText, setSearchText] = useState('')
  const [destinations, setDestination] = useState([
    { id: 1, name: 'New York' },
    { id: 2, name: 'Oman' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'California' },

  ])
 
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    setSearchText(searchText)

      if(searchText === "oman" || searchText === "australia" || searchText === "canada") {
        setMatchedDestination(true)
    }else {

        swal("Didn't match ","you can try:-    oman , canada","error")
    setMatchedDestination(false)
      }
    
}
  const handleLogOut = () => {
    logOutUser()
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(matchedDestination);
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
      <li><Link to="/">Tour</Link ></li>
      <li><Link to="/about">Destination</Link ></li>
      <li><Link to="/about">Blog</Link ></li>
      <li><Link to="/destination">Destination</Link ></li>
      <li><Link to="/">Contact</Link ></li>
      </ul>
    </div>
    <Link  className=" text-xl font-bold">Advancer</Link >
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><Link to='/' >Home</Link ></li>
      <li><Link to="/about">About</Link ></li>
      <li><Link to="/">Tour</Link ></li>
      <li><Link to="/destination">Destination</Link ></li>
      <li><Link to="/">Blog</Link ></li>
      <li><Link to="/">Pages</Link ></li>
      <li><Link to="/">Contact</Link ></li>
    </ul>
                </div>
              
          <div className="navbar-end">
          <form onSubmit={handleSearch} className="join mr-5 ml-10">
        <input type="text" placeholder="Destinations" name='search' className="h-[46px] mt-[1px] input input-bordered join-item text-black" /> 
        <button type='submit' className="btn bg-[#F8D448] join-item cursor-pointer"><LuSearch />
</button>
      </form>

               <Link className='cursor-pointer ' to="/booking"> <FaShoppingCart className='mr-5 cursor-pointer w-5 h-5 ' /></Link>

{/* user profile */}
                <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-transparent hover:bg-transparent">
                <div className="w-10 ">
               <FaUserCircle className='w-8 h-8 mt-1' />

          {/* <img alt="Tailwind CSS Navbar component" src="https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" /> */}
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
                {user ? (
      
          <li> <Link onClick={handleLogOut} to="/" className="bg-yellow-400">
            LogOut
          </Link></li>
         
        ) : (
         <li> <Link to="/login" className="bg-yellow-400">
            Login
          </Link></li>
        )}
      </ul>
    </div>                

 
  </div>
</div>
        </div>
    );
};

export default Navbar;