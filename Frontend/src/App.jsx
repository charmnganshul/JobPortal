import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import JobListingPage from "./pages/JobListingPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/joblisting" element={<JobListingPage />} />
        
      </Routes>
    </>
  );
}

export default App;
