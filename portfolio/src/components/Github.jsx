import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <div>
      <h1 className='flex justify-center bg-orange-500 p-10 text-white text-xl font-extrabold'>Github Followers: {data.followers}</h1>

    </div>
  )
}

export default Github

export const githubData = async ()=>{
    const response = await fetch(`https://api.github.com/users/Love-Goyner`);
    return response.json();
}
