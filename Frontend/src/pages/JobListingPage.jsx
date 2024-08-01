import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

const JobListingPage = () => {
  return (
    <div className="container mx-auto py-16">
      <Header></Header>
      <div className="p-24">
        <h2 className="text-3xl font-bold text-center mb-12">Job Listings</h2>
        <div className="flex justify-between">
          <div className="w-1/4">

{/* {Filter section}------- */}

          </div>
          <div className="w-3/4">
{/* {Job post}------------         \ */}
 </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobListingPage;
