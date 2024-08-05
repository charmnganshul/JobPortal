import React from 'react';
import {
  FaUser,
  FaBriefcase,
  FaBookmark,
  FaEdit,
  FaEye,
  FaCog,
  FaSignOutAlt,
  FaThLarge,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="   flex flex-col w-[20%]  text-gray-500  rounded-[5px]  h-[60vh]">
      <div className="flex items-center justify-start px-4 gap-3 rounded-[5px] py-2 mb-2 bg-[#00A7AC] w-[100%] ">
        <FaThLarge className=" text-lg text-white " />
        <h1 className=" text-lg text-white  font-semibold">Dashboard</h1>
      </div>
      <ul className="space-y-6 pl-4">
        <li className="flex items-center space-x-3">
          <FaUser className="text-gray-500" />
          <span className="text-gray-500">My Profile</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaBriefcase className="text-gray-500" />
          <span className="text-gray-500">Applied Jobs</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaBookmark className="text-gray-500" />
          <span className="text-gray-500">Bookmark Jobs</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaEdit className="text-gray-500" />
          <span className="text-gray-500">Edit Resume</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaEye className="text-gray-500" />
          <span className="text-gray-500">View Resume</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaCog className="text-gray-500" />
          <span className="text-gray-500">Settings</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaSignOutAlt className="text-gray-500" />
          <span className="text-gray-500">Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
