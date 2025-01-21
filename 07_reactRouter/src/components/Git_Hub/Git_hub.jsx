import  {React, useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Git_hub() {

  const data =useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Git_Hub Followers:{data?.followers}
      <img src={data?.avatar_url} alt="" width={300} />
    </div>
  )
}

export default Git_hub

export const githubInfoLoder = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}