import React from 'react'
export default function PapersCard() {
  return (
    <>
      <a href="/" class=" block px-3 py-2 shadow-sm  bg-indigo-50 hover:bg-white rounded-md hover:shadow-xl duration-300">
        <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className='h-30 w-full' alt="" />
        <div className="flex  justify-between mt-2">
          <p className='text-lg font-medium'>Data Structures </p>
          <p className='flex flex-col items-center font-mono'>Final<br /> <span className='text-xs'> 2023</span></p>

        </div>

      </a>
    </>
  )
}
