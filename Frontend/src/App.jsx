import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import JobCategory from './component/JobCategory'
import RegisterAccount from './component/RegisterAccount'

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/jobcategory' element={<JobCategory/>}></Route>
        <Route path='/register' element={<RegisterAccount/>}></Route>
   
      </Routes>
    </div>
  )
}

export default App
