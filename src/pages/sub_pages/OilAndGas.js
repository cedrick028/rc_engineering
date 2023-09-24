import React from 'react'

import oilAndGasIcon from "../../assets/icons/industries/oil_and_gas.png"
import oilAndGasIllustration from "../../assets/illustrations/industries_page/oil_and_gas.png"

const OilAndGas = () => {
  return (
    <div>
      <div className="container px-6 m-auto my-14 lg:mt-28">
        <div className="flex items-center gap-10">
          <div className="industryIconsContainer rounded-lg flex items-center justify-center">
            <div className="industryIcons">
              <img alt="Oil_Barrel" src={oilAndGasIcon} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">OIL AND GAS</h2>
        </div>
      </div>
      
      <div className="container px-6 m-auto my-14">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">RC with its extensive experience in varied technologies, has complete capability in providing automation solutions for the Oil & Gas industry. RC provides a complete range of services – from consulting, engineering, procurement, integration, commissioning, training, maintenance & support and helping our customers derive the greatest value from their assets.</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">RC solutions play a major role in increasing operational and production efficiencies, reducing costs and improving safety. We provide complete following solutions for the oil & gas industry covering Control Systems, Instrumentation, Intelligent LV MCCs for the following:</p>
            <p className="text-xs md:text-sm max-w-2xl my-5 text-center lg:text-start">• Wellhead Monitoring and Control<br/>• Intelligent Control Room Management<br/>• Tank Farm and Terminals<br/>• Midstream Pipeline Solutions<br/>• Offshore Vessel Control and Safety</p>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Building" src={oilAndGasIllustration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OilAndGas