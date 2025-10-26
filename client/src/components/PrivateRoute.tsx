import React from 'react'
import Navbar from './Navbar'

function PrivateRoute({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  // Login check logic will be added here
  return (
    <div className='flex flex-col px-3 lg:px-14  py-2 text-sm'>
      <Navbar />
      {children}
    </div>
  )
}

export default PrivateRoute