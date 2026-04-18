import React from 'react'
import { TiPlusOutline } from "react-icons/ti";

const Banner = () => {
  return (
    <div className='text-center items-center space-y-6'>
        <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
        relationships that matter most.</p>
        <button className='btn bg-[#244D3F] text-white'><TiPlusOutline></TiPlusOutline>Add a Friend</button>
    </div>
  )
}

export default Banner