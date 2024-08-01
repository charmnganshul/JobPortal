import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaClock, FaBookmark, FaBriefcase } from 'react-icons/fa';

const JobCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <img src="path/to/image.png" alt="Job" className="h-16 w-16 rounded-full mb-4" />
          <h2 className="text-xl font-bold mb-2">WordPress Developer</h2>
          <p className="text-gray-600 mb-1">Bistro Tech Ltd</p>
          <p className="text-gray-600">Deadline: 2 April, 2023</p>
        </div>
        <FaBookmark className="text-gray-400 text-xl" />
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <FaDollarSign className="text-gray-400 mr-2" />
          <p className="text-gray-600">Salary: <span className="font-bold">$60-$90</span> / Per Hour</p>
        </div>
        <div className="flex items-center mb-2">
          <FaBriefcase className="text-gray-400 mr-2" />
          <p className="text-gray-600">Experience: <span className="font-bold">3-3.5 Years</span></p>
        </div>
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <p className="text-gray-600">Location: <span className="font-bold">Dhaka, Bangladesh</span></p>
        </div>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
