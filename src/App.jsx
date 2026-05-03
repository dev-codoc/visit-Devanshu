import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'

const App = () => (
  <div className='w-full bg-gray-100 flex flex-col items-center justify-start'>
    <Navbar />
    <Hero />
    <Work />
  </div>
)

export default App