 import React from 'react'
 import './App.css'
 import { Routes,Route } from 'react-router-dom'
import Hero from './Component/Hero'
 
function App() {
return (
    <>
     <Routes>
      <Route path='/hero' element={<Hero/>}>
      
      </Route>
     </Routes>    
    </>
  )
}

export default App
