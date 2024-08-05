import React from 'react'

function EditResume() {
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center'>
        <div className='h-[100vh] w-[100%] justify-center  bg-yellow-200 flex gap-2'>
       <button className='h-[7vh] w-[10%] bg-red-400'>Basic Information</button>
       <button className='h-[7vh] w-[10%] bg-red-400'>Profile</button>
       <button className='h-[7vh] w-[10%] bg-red-400'>Education</button>
       <button className='h-[7vh] w-[10%] bg-red-400'>Professional Infor</button>
        </div>
    </div>
  )
}

export default EditResume