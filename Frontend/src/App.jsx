import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import JobCategory from './component/JobCategory'
import RegisterAccount from './component/RegisterAccount'
import PostAJob from './component/PostAJob'
import JobPostForm from './component/JobPostForm'
import JobCard from './component/JobCard'
import Filter from './component/Filter'
import JobCategoryAll from './component/JobCategoryAll'
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/jobcategory' element={<JobCategory/>}></Route>
        <Route path='/register' element={<RegisterAccount/>}></Route>
        <Route path='/postAJob' element={<PostAJob/>}></Route>
        <Route path='/jobform' element={<JobPostForm/>}></Route>
        <Route path='/jobcard' element={<JobCard/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
        <Route path='/categoryall' element={<JobCategoryAll/>}></Route>  
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
