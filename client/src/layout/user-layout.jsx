import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { loadState } from '../lib/storage'

export const UserLayout = () => {
  const user = loadState("user");
  if(!user) return <Navigate to="/" replace/>
  return (
    <div className='grid grid-cols-12'>
        <div className=' col-span-3 h-[83vh] p-4 shadow-lg '>

        </div>
        <main className=' col-span-9 p-5 '>
            <Outlet/>
        </main>
    </div>
  )
}
