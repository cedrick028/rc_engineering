import React from 'react'
import { Link } from 'react-router-dom'

import industriesOilAndGasIllustration from "../../assets/illustrations/industries_page/oil_and_gas.png"
import industriesUtilitiesIllustration from "../../assets/illustrations/industries_page/utilities.png"
import industriesTransportIllustration from "../../assets/illustrations/industries_page/transport.png"
import industriesWaterAndWasteWaterIllustration from "../../assets/illustrations/industries_page/water_and_waste_water.png"

const Industries = () => {
  return (
    <div>
      {/* Content 1 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start">OUR <span>INDUSTRY SERVICES</span></h1>
      </div>
      
      {/* Content 2 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-center lg:text-start lg:hidden text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">Oil and Gas</h2>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block">Oil and Gas</h2>
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">RC with its extensive experience in varied technologies, has complete capability in providing automation solutions for the Oil & Gas industry. RC provides a complete range of services – from consulting, engineering, procurement, integration, commissioning, training, maintenance & support and helping our customers derive the greatest value from their assets.</p>
            <Link to="/OilAndGas"><button className="rounded-xl text-xs md:text-sm">Read more</button></Link>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Building" src={industriesOilAndGasIllustration} />
          </div>
        </div>
      </div>

      {/* Content 3 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center lg:hidden">Utilities</h2>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="illustrations mt-10 lg:mt-0">
            <img alt="Power" src={industriesUtilitiesIllustration} />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block mb-5">Utilities</h2>
            <p className="text-xs md:text-sm max-w-3xl text-center lg:text-start my-5 lg:my-10">The utility industry presents a complex business environment with some very specific challenges.</p>
            <Link to="/Utilities"><button className="rounded-xl text-xs md:text-sm">Read more</button></Link>
          </div>
        </div>
      </div>
      
      {/* Content 4 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-center lg:text-start lg:hidden text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">Transport Infrastructure</h2>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block">Transport Infrastructure</h2>
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">Transport is vital to the well-functioning of economic activities and a key to ensuring social well-being and cohesion of populations. Transport ensures everyday mobility of people and is crucial to the production and distribution of goods. Adequate infrastructure is a fundamental precondition for transport systems.</p>
            <Link to="/TransportInfrastructure"><button className="rounded-xl text-xs md:text-sm">Read more</button></Link>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Ship" src={industriesTransportIllustration} />
          </div>
        </div>
      </div>

      {/* Content 5 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center lg:hidden">Water and Waste Water</h2>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="illustrations mt-10 lg:mt-0">
            <img alt="Waste_water" src={industriesWaterAndWasteWaterIllustration} />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block mb-5">Water and Waste Water</h2>
            <p className="text-xs md:text-sm max-w-3xl text-center lg:text-start my-5 lg:my-10">Water is a finite and, therefore, valuable resource that requires optimal management. Its scarcity during periods of drought, over-abundance in flood, and its quality, determines how society uses this resource, and how administrations regulate its many uses.</p>
            <Link to="/WaterAndWasteWater"><button className="rounded-xl text-xs md:text-sm">Read more</button></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Industries