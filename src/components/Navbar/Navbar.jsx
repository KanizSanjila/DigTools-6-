import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (
 <div className="navbar bg-base-100 py-4 sticky top-0 z-50 shadow-sm px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <a  
          className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
        >
          Digi Tools
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Cart Icon with Badge */}
        <div className="dropdown dropdown-end mr-2">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item bg-[#f6ba39] text-white border-none">
              </span>
            </div>
          </div>
        </div>
        <MdOutlineShoppingCart />
        <button className="btn btn-ghost hidden sm:flex font-semibold">Login</button>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none px-6 rounded-full">
          Get Started
        </button>
      </div>
    </div>
    );
};

export default Navbar;