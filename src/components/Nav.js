import { React, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

import rcLogo from '../assets/logo/rc_logo.png'
import openMenu from '../assets/icons/open_menu.png'
import closeMenu from '../assets/icons/close_menu.png'

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container px-6 flex justify-between items-center m-auto sticky top-0 bg-white pb-2 flex-wrap" data-aos="fade-down">
        <div className="rcLogo z-20">
            <Link to="/"><img alt="RC_Logo" src={rcLogo} /></Link>
        </div>
        <div className="mobileMenu z-10 block lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img alt="Mobile_menu" src={menuOpen ? closeMenu : openMenu} />
        </div>
        <div className={menuOpen ? "showMobileMenu text-base px-12 pt-36" : "hideMobileMenu lg:!block lg:w-auto lg:relative"}>
            <NavLink to="/Services" className="navLinks ml-0 lg:ml-8">Services</NavLink>
            <NavLink to="/OurSolutions" className="navLinks ml-0 lg:ml-8">Our Solutions</NavLink>
            <NavLink to="/Industries" className="navLinks ml-0 lg:ml-8">Industries</NavLink>
            <NavLink to="/AboutUs" className="navLinks ml-0 lg:ml-8">About Us</NavLink>
            <NavLink to="/ContactUs" className="navLinks ml-0 lg:ml-8">Contact Us</NavLink>
        </div>
    </div>
  )
}

export default Nav