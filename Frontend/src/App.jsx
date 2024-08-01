import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import JobCategory from './component/JobCategory'
import RegisterAccount from './component/RegisterAccount'
import PostAJob from './component/PostAJob'
import JobPostForm from './component/JobPostForm'
import JobCard from './component/JobCard'
import Filter from './component/Filter'



function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/jobcategory' element={<JobCategory/>}></Route>
        <Route path='/register' element={<RegisterAccount/>}></Route>
        <Route path='/postAJob' element={<PostAJob/>}></Route>
        <Route path='/jobform' element={<JobPostForm/>}></Route>
        <Route path='/jobcard' element={<JobCard/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
        

 
   
      </Routes>
    </div>
  )
}

export default App
