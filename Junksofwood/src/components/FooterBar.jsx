import React from 'react'
import { NavLink } from "react-router-dom";
import { FaCopyright } from "react-icons/fa";

const FooterBar = () => {
  return (
    <footer>
      <span>
        <FaCopyright /> Copyright JunksofWood 2024
      </span>
      <NavLink to="/test" style={{textdecoration: 'none'}}>
        <button  style={{padding: '5px,', marginLeft: "20px"}}>Test</button>
      </NavLink>
    </footer>
  )
}

export default FooterBar