import React from 'react'
import { useParams } from 'react-router-dom'

function DefaultUrl() {
  const {DefaultUrl} = useParams();
  return (
      <h1 className='flex justify-center bg-orange-500 p-10 text-white text-xl font-extrabold'>Find Nothing on Url : {DefaultUrl}</h1>
  
  )
}

export default DefaultUrl
