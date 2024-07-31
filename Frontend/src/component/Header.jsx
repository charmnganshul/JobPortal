import React from "react";
import Logo from "../assets/img/header1-logo.png"
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            // className="h-8 w-8"
          />
          {/* <div className="ml-2 text-xl font-bold">
            <span className="text-teal-500">JOBES</span>
            <span className="text-gray-700"> Job Portal</span>
          </div> */}
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <a href="#home" className="text-gray-700 hover:text-teal-500">Home</a>
          <div className="relative group">
            <a href="#find-jobs" className="text-gray-700 hover:text-teal-500">Find Jobs</a>
            {/* Dropdown example */}
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
              <a href="#link1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 1</a>
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
          <a href="#blog" className="text-gray-700 hover:text-teal-500">Blog</a>
          <a href="#contact" className="text-gray-700 hover:text-teal-500">Contact</a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <p className="text-gray-700">
            Welcome Our Job Portal! <a href="#save-jobs" className="text-teal-500">Save Jobs</a>
          </p>
          <div className="relative">
            <button className="relative">
              <i className="fa fa-bell text-gray-700"></i>
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">5</span>
            </button>
          </div>
          <button className="text-gray-700 border px-4 py-2 rounded hover:bg-gray-100">Sign In</button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Post Job</button>
        </div>
        
        {/* Language Selection and Social Media Links */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center text-gray-700">
              <img src="path_to_flag.png" alt="Flag" className="h-4 w-4 mr-2" />
              Language
              <i className="fa fa-caret-down ml-1"></i>
            </button>
          </div>
          <div className="flex space-x-2">
            <a href="#facebook" className="text-gray-700 hover:text-teal-500"><i className="fa fa-facebook"></i></a>
            <a href="#twitter" className="text-gray-700 hover:text-teal-500"><i className="fa fa-twitter"></i></a>
            <a href="#linkedin" className="text-gray-700 hover:text-teal-500"><i className="fa fa-linkedin"></i></a>
            <a href="#instagram" className="text-gray-700 hover:text-teal-500"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
