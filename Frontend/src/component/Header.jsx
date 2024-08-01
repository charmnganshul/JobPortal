import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md py-4">
      <div className=" mx-auto flex justify-between items-center px-10">
        {/* Logo */}
        <div onClick={()=>navigate("/")} className="flex items-center">
          <img
            src="https://jobes-nextjs.vercel.app/assets/images/header1-logo.svg"
            alt="Logo"
         />
          
        </div>
        {/* User Actions */}
<div className="flex flex-col w-[80%] gap-6">
<div className="">
        <p className="text-gray-700 text-[1.5rem]">
            Welcome Our Job Portal! <a href="#save-jobs" className="text-teal-500">Save Jobs</a>
          </p>
          <div className="relative">
          
          </div>
        </div>
<div className=" flex justify-between item-center">
<nav className="flex items-center gap-20 text-[1.2rem]">
          <a onClick={()=>navigate("/")} href="#home" className="text-teal-700 font-semibold hover:text-gray-500 border hover:border-gray-500 px-6 ">Home</a>
          <div className="relative group">
            <a href="#find-jobs" className="text-gray-700 hover:text-teal-500 ">Find Jobs</a>
            {/* Dropdown example */}
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
              <button onClick={()=>navigate("/jobcategory")} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Job Category
              </button>
              <a href="#link2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 2</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#pages" className="text-gray-700 hover:text-teal-500">Pages</a>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
              <a href="#link1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 1</a>
              <a href="#link2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 2</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#employers" className="text-gray-700 hover:text-teal-500">Employers</a>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
              <a href="#link1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 1</a>
              <a href="#link2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 2</a>
            </div>
          </div>
          <a href="#contact" className="text-gray-700 hover:text-teal-500">Contact</a>
        </nav>
        <div className="flex items-center justify-between gap-8">
        <button className="relative">
              <i className="fa fa-bell text-gray-700"></i>
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">5</span>
            </button>
          <button onClick={()=>navigate("/login")} className="text-gray-700 border px-4 py-2 rounded hover:bg-teal-500">Sign In</button>
        <button onClick={()=>navigate("/postjob")} className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 flex items-center justify-center gap-2">Post Job <i class="fa fa-envelope-o" aria-hidden="true"></i></button>

        </div>
</div>
        {/* Navigation Links */}

       
</div>
     

      
        
      
      </div>
    </header>
  );
};

export default Header;
