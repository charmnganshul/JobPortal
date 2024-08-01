import React from "react";
import "tailwindcss/tailwind.css";

const JobCard = ({ job }) => {
  return (
    <div>
      <div className="  p-[10px] flex  flex-col gap-5">
        <div className=" w-[100%] flex  justify-between bg-purple-400">
          <label className="text-gray-500 ">
            Showing results 10 in 200 jobs list
          </label>
          <div className="flex items-center h-[2vh]  mt-[8px]  gap-5 ">
            <select className="text-[14px] font-thin text-gray-600 outline-none shadow bg-white f">
              <option value="">Shot by (Default)</option>
              <option value="IT">full time </option>
              <option value="Finance">part time</option>
              <option value="Healthcare">Remote</option>
              <option value="Education">internship</option>
              <option value="Marketing">Freelance</option>
            </select>
            <i class="fa fa-qrcode fa-lg text-[#00A7AC]" aria-hidden="true"></i>
            <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="border bg-red-300">
          <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">{job.title}</h4>
              <span className="text-gray-600">{job.type}</span>
            </div>
            <p className="text-gray-700 mb-2">Salary: {job.salary}</p>
            <p className="text-gray-700 mb-2">Vacancy: {job.vacancy}</p>
            <p className="text-gray-700 mb-2">Deadline: {job.deadline}</p>
            <button className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const JobListing = () => {
  const jobs = [
    {
      title: "React JS Developer",
      type: "Full Time, Part Time",
      salary: "$80-$110 / Per month",
      vacancy: "07 Person (Both)",
      deadline: "02 March, 2023",
    },
    // Add more jobs as needed
  ];

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobListing;
