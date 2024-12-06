import React from 'react'
import Header from './_components/Header'

const DashboardLayout= ({children}) => {
  return (
    <div>
      <Header/>
      <div className='px-10 py-10 md:px-20 lg:px-40 xl:px-60 '>
      {children}
      </div>

      
    </div>
  )
}

export default DashboardLayout
