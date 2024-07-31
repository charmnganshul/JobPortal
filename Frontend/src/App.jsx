 import React from 'react'
 import './App.css'
 import { Routes,Route } from 'react-router-dom'
import Hero from './Component/Hero'
import Login from './Component/Login'

 
function App() {
return (
    <>
     <Routes>
      <Route path='/hero' element={<Hero/>}></Route>
      <Route path='/login' element={<Login/>}>
      
      </Route>
     </Routes>    
    </>
  )
}

export default App
