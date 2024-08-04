import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import JobListingPage from "./pages/JobListingPage";
import PostJobPage from "./pages/PostJobPage";
import JobCategoryPage from "./pages/JobCategoryPage";
import CompanyListing from "./pages/CompanyListing";
import JobDetailPage from "./pages/JobDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/joblisting" element={<JobListingPage />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/jobcategory" element={<JobCategoryPage />} />
        <Route path="/companylisting" element={<CompanyListing />} />
        <Route path="/jobDetail" element={<JobDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
