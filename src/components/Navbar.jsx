import React from 'react'
import { FaHome } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        <img src="/src/assets/logo.png" alt="" />
        
        <ul className='flex items-center gap-3'>
        <li><NavLink to={"/"} className={({isActive})=>`btn flex gap-1.5 items-center ${isActive ? "rounded bg-[#244D3F] text-white":""}`}><FaHome></FaHome> Home</NavLink></li>
        <li><NavLink  to={"/timeline"} className={({isActive})=>` btn flex gap-1.5 items-center${isActive ? "rounded bg-[#244D3F] text-white":""}`}><CiTimer></CiTimer> Timeline</NavLink></li>
        <li><NavLink to={"/stats"} className={({isActive})=>`flex gap-1.5 items-center btn ${isActive ? "rounded bg-[#244D3F] text-white":""}`}><TfiStatsUp></TfiStatsUp> Stats</NavLink></li>
      </ul>
        
    </div>
  )
}

export default Navbar