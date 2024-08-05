import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CompanyDashboard from "../component/CandidateDashBoard";
import Sidebar from "../component/Sidebar";
import UserProfile from "../component/UserProfile";
import JobTable from "../component/JobTable";

function DashBoardCandi() {
  return (
    <div>
      <Header />
      <div className="p-24 flex justify-center">
      <Sidebar/>
      <div>
      <UserProfile/>
      <JobTable/>
      </div>
     
      </div>
     
      <Footer />

    </div>
  );
}

export default DashBoardCandi;
