import React from 'react'
import { NavLink } from "react-router-dom";
// import { FaRegCopyright } from "react-icons/fa6";
import { PiCopyright } from "react-icons/pi";

const FooterBar = () => {
  return (
    <footer>
      <span>
        <PiCopyright /> Copyright 2024 Junks of Wood. All Rights Reserved.
      </span>
      <NavLink to="/test" style={{textdecoration: 'none'}}>
        <button  style={{padding: '5px,', marginLeft: "20px"}}>Test</button>
      </NavLink>
    </footer>
  )
}

export default FooterBar