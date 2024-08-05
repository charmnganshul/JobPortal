import React from 'react';
import { FaBriefcase, FaBookmark, FaEnvelope, FaUserCheck } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div className="p-8 bg-gray-50">
      {/* Profile Header */}
      <div className="flex items-center mb-8">
        <img
          src="https://jobes-nextjs.vercel.app/assets/images/bg/author1.png"
          alt="Profile"
          className="w-16 h-16 rounded-xl mr-6"
        />
        <div>
          <p className="text-gray-700 font-semibold">Hello, I'm</p>
          <h1 className="text-teal-500 text-3xl font-bold">
            JACOLINE <span className="text-gray-700">Frankly</span>
          </h1>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between bg-purple-400 border-bottom">
          <div className="flex items-center bg-red-300">
            <FaBriefcase className="text-teal-500 text-3xl" />
            <div className="ml-4 bg-yellow-50">
              <p className="text-gray-700">Total Applied</p>
              <p className="text-2xl font-bold text-gray-900">250+</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <FaBookmark className="text-teal-500 text-3xl" />
            <div className="ml-4">
              <p className="text-gray-700">Saved Jobs</p>
              <p className="text-2xl font-bold text-gray-900">150+</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <FaEnvelope className="text-teal-500 text-3xl" />
            <div className="ml-4">
              <p className="text-gray-700">Message</p>
              <p className="text-2xl font-bold text-gray-900">120+</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <FaUserCheck className="text-teal-500 text-3xl" />
            <div className="ml-4">
              <p className="text-gray-700">Review CV</p>
              <p className="text-2xl font-bold text-gray-900">500+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
