import React from 'react'

import waterAndWasteWaterIcon from "../../assets/icons/industries/water_and_waste_water.png"
import waterAndWasteWaterIllustration from "../../assets/illustrations/industries_page/water_and_waste_water.png"

const WaterAndWasteWater = () => {
  return (
    <div data-aos="fade-right">
      <div className="container px-6 m-auto my-14 lg:mt-28">
        <div className="flex items-center gap-10">
          <div className="industryIconsContainer rounded-lg flex items-center justify-center">
            <div className="industryIcons">
              <img alt="Oil_Barrel" src={waterAndWasteWaterIcon} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">WATER AND WASTE WATER</h2>
        </div>
      </div>
      
      <div className="container px-6 m-auto my-14">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">RC with its extensive experience in varied technologies, has complete capability in providing automation solutions for the Oil & Gas industry. RC provides a complete range of services – from consulting, engineering, procurement, integration, commissioning, training, maintenance & support and helping our customers derive the greatest value from their assets.</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">RC has the engineering capability, experience and technologies to deliver “turnkey” system integration specifically tailored to different water plant types, such as water treatment plants and water pumping stations.</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">Our services include design, engineering, supply, delivery, installation, commissioning, testing, and ensure the quality of the integration into the complete instrument, control and electrical system of your water facility. Our system integration experience has permitted us to supply numerous turnkey units to a variety of water utilities.</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">RC offers complete integration of:</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">• Instrumentation<br/>• Control and electrical systems for water pumping stations<br/>• Water & Waste Water treatment</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">Our services include design, engineering, supply, delivery, installation, commissioning, testing, and ensure the quality of the integration into the complete instrument, control and electrical system of your water facility. Our system integration experience has permitted us to supply numerous turnkey units to a variety of water utilities.</p>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Building" src={waterAndWasteWaterIllustration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaterAndWasteWater