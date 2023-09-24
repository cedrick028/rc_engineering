import React from 'react'

import transportInfrastructureIcon from "../../assets/icons/industries/transport.png"
import transportInfrastructureIllustration from "../../assets/illustrations/industries_page/transport.png"

const TransportInfrastructure = () => {
  return (
    <div>
      <div className="container px-6 m-auto my-14 lg:mt-28">
        <div className="flex items-center gap-10">
          <div className="industryIconsContainer rounded-lg flex items-center justify-center">
            <div className="industryIcons">
              <img alt="Oil_Barrel" src={transportInfrastructureIcon} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">TRANSPORT INFRASTRUCTURE</h2>
        </div>
      </div>
      
      <div className="container px-6 m-auto my-14">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">Transport is vital to the well-functioning of economic activities and a key to ensuring social well-being and cohesion of populations. Transport ensures everyday mobility of people and is crucial to the production and distribution of goods. Adequate infrastructure is a fundamental precondition for transport systems.</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">The transport industry presents a complex business environment with some very specific challenges. RC is a leading provider of its professional services to deliver the following solutions for transport industry:</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">• Safety and Security<br/>• Asset Condition Monitoring<br/>• Operational Train / Traffic Monitoring and Control</p>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Building" src={transportInfrastructureIllustration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportInfrastructure