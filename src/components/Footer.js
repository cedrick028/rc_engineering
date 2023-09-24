import React from 'react'

import mainLogo from '../assets/logo/main_logo.png'
import facebookLogo from "../assets/logo/facebook.png"
import linkedInLogo from "../assets/logo/linkedin.png"

const Footer = () => {
  return (
    <div className="container px-6 m-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        <div className="max-w-sm my-6 lg:my-0">
            <div className="mainLogoContainer">
                <img alt="Main_logo" src={mainLogo} />
            </div>
        </div>
        <div className="max-w-xl my-6 lg:my-0">
            <p className="text-xs text-center lg:text-left">RC is a specialist Consulting, Systems Integration and Trading company providing critical solutions and advisory services to Oil & Gas, Utilities, Transport Infrastructure and Manufacturing sectors.RC is a specialist Consulting, Systems Integration and Trading company providing critical solutions and advisory services to Oil & Gas, Utilities, Transport Infrastructure and Manufacturing sectors.</p>
        </div>
        <div className="max-w-sm my-6 lg:my-0">
            <p className="footerTitle text-base text-center lg:text-left">Our Social Media Platforms:</p>
            <p className="my-5 text-xs text-center lg:text-left">Visit any of our social media platforms for the latest updates and our upcoming releases. Be the first to avail our latest and hottest sneakers!</p>
            <div className="flex gap-3 justify-center lg:justify-start">
                <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100090576146165" target="_blank"><div className="socmedContainer">
                    <img alt="Facebook_logo" src={facebookLogo} />
                </div></a>
                <a rel="noreferrer" href="https://www.linkedin.com/company/rc-engineering-master-at-work/" target="_blank"><div className="socmedContainer">
                    <img alt="LinkedIn_logo" src={linkedInLogo} />
                </div></a>
            </div>
        </div>
    </div>
  )
}

export default Footer