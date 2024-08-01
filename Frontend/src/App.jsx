import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import JobCategory from './component/JobCategory'
import RegisterAccount from './component/RegisterAccount'
import PostAJob from './component/PostAJob'
import JobPostForm from './component/JobPostForm'


function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/jobcategory' element={<JobCategory/>}></Route>
        <Route path='/register' element={<RegisterAccount/>}></Route>
        <Route path='/postAJob' element={<PostAJob/>}></Route>
        <Route path='/jobform' element={<JobPostForm/>}></Route>
 
   
      </Routes>
    </div>
  )
}

export default App
