import React from 'react'
import { useParams } from 'react-router-dom'

export default function user() {
    const   {userid} = useParams()
    return (
      <>
      <div className='bg-gray-800 text-white text-3xl p-4 text-center '>User:{userid}</div>
      </>
    )
  }

  
