import React from 'react'

import utilitiesIcon from "../../assets/icons/industries/utilities.png"
import utilitiesIllustration from "../../assets/illustrations/industries_page/utilities.png"

const Utilities = () => {
  return (
    <div data-aos="fade-right">
      <div className="container px-6 m-auto my-14 lg:mt-28">
        <div className="flex items-center gap-10">
          <div className="industryIconsContainer rounded-lg flex items-center justify-center">
            <div className="industryIcons">
              <img alt="Oil_Barrel" src={utilitiesIcon} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">UTILITIES</h2>
        </div>
      </div>
      
      <div className="container px-6 m-auto my-14">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">RThe utility industry presents a complex business environment with some very specific challenges. RC is a leading provider of its professional services to deliver the following solutions for utilities industry:</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">• Renewable Energy Solutions<br/>• Critical Power and Cooling Solutions<br/>• Enterprise Operational Reporting<br/>• Smart Grid Solutions<br/>• Water and Wastewater Solution</p>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Building" src={utilitiesIllustration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utilities