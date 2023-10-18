import React, { useState } from 'react'
import './App.css'
import Sidebar from './data/Sidebar'
import Page from './data/Page'
import Navbar from './data/Navbar'
function App() {
  

  return (
    <>
    <div className='w-72 fixed sidebar pt-4 bg-violet-950'>
          <Sidebar/>
        </div>
        <div className='navbar bg-gray-100'>
          <Navbar />
          </div>
        <div className='page bg-gray-100'>
        <Page/>
        </div>
    </>
        
      )
}


export default App
