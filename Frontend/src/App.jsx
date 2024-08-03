 import React from 'react'
 import './App.css'
 import { Routes,Route } from 'react-router-dom'
import Hero from './Component/Hero'
import Login from './Component/Login'
import JobLishting from './Component/JobLishting'
import JobDetail from './Component/JobDetail'

 
function App() {
return (
    <>
     <Routes>
      <Route path='/hero' element={<Hero/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/joblishting' element={<JobLishting/>}></Route>
      <Route path='/jobDetail' element={<JobDetail/>}></Route>
     </Routes>    
    </>
  )
}

export default App
