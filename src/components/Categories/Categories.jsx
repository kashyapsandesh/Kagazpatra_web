import React from 'react'
import ModelCategory from './Widgets/ModelCategory'
import NavBar from '../navbar/NavBar'

function Categories() {
  return (
    <div className='flex gap-3 p-20 m-10' >
    
      <ModelCategory/>
      <ModelCategory/>
      <ModelCategory/>
    </div>
  )
}

export default Categories
