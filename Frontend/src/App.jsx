import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import JobCategory from './component/JobCategory'

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/jobcategory' element={<JobCategory/>}></Route>
      </Routes>
    </div>
  )
}

export default App
