import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

function PrivateRoute({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  // Login check logic will be added here
  return (
    <div className='flex flex-col '>
      <div className='lg:px-14 pt-2'>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default PrivateRoute