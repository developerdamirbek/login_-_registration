import React from 'react'
import { Link } from 'react-router-dom'

export const Blog = () => {
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center pt-[120px] '>
      <div className=' flex flex-col gap-3 items-center '>
        <h1 className=' text-[48px] font-medium text-[#299efe] '>Blog Page</h1>
        <Link to="/">
          <button className=' py-2 rounded-md text-[18px] px-4 w-[190px] bg-[#299efe] text-white transition-all duration-300 border border-[#299efe] hover:bg-transparent hover:text-[#299efe] '>
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  )
}
