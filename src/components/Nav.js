import { React, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {isMobile} from 'react-device-detect';

import rcLogo from '../assets/logo/rc_logo.png'
import openMenu from '../assets/icons/open_menu.png'
import closeMenu from '../assets/icons/close_menu.png'

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container px-6 flex justify-between items-center m-auto sticky top-0 bg-white pb-2 flex-wrap z-30">
        <div className="rcLogo z-20">
            <Link to="/rc_engineering"><img alt="RC_Logo" src={rcLogo} onClick={() => {(isMobile) && setMenuOpen(!menuOpen)}} /></Link>
        </div>
        <div className="mobileMenu z-10 block lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img alt="Mobile_menu" src={menuOpen ? closeMenu : openMenu} />
        </div>
        <div className={menuOpen ? "showMobileMenu text-base px-12 pt-36" : "hideMobileMenu lg:!block lg:w-auto lg:relative"}>
            <NavLink to="/services" className="navLinks ml-0 lg:ml-8" onClick={() => {(isMobile) && setMenuOpen(!menuOpen)}} >Services</NavLink>
            <NavLink to="/oursolutions" className="navLinks ml-0 lg:ml-8" onClick={() => {(isMobile) && setMenuOpen(!menuOpen)}} >Our Solutions</NavLink>
            <NavLink to="/industries" className="navLinks ml-0 lg:ml-8" onClick={() => {(isMobile) && setMenuOpen(!menuOpen)}} >Industries</NavLink>
            <NavLink to="/aboutus" className="navLinks ml-0 lg:ml-8" onClick={() => {(isMobile) && setMenuOpen(!menuOpen)}} >About Us</NavLink>
            <NavLink to="/contactus" className="navLinks ml-0 lg:ml-8" onClick={() => {(isMobile) && setMenuOpen(!menuOpen)}} >Contact Us</NavLink>
        </div>
    </div>
  )
}

export default Nav