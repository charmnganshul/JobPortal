import React from 'react';

const DashBoard1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Candidate Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Profile Views</h2>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-gray-600">In the last month</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Applications</h2>
            <p className="text-2xl font-bold">456</p>
            <p className="text-gray-600">Total applications</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Interviews</h2>
            <p className="text-2xl font-bold">12</p>
            <p className="text-gray-600">Upcoming interviews</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Job Offers</h2>
            <p className="text-2xl font-bold">3</p>
            <p className="text-gray-600">Received this month</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
          <ul className="bg-white p-4 shadow rounded-lg">
            <li className="border-b border-gray-200 py-2">
              <span className="font-semibold">Job Application:</span> Applied to Software Engineer at Google
            </li>
            <li className="border-b border-gray-200 py-2">
              <span className="font-semibold">Profile View:</span> Your profile was viewed by Amazon
            </li>
            <li className="border-b border-gray-200 py-2">
              <span className="font-semibold">Interview:</span> Scheduled interview with Microsoft
            </li>
            <li className="py-2">
              <span className="font-semibold">Job Offer:</span> Received an offer from Facebook
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard1;
