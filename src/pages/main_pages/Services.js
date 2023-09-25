import React from 'react'

import servicesIntroIllustration from "../../assets/illustrations/services_page/intro.png"

import servicesBgA from "../../assets/illustrations/services_page/trading_and_supply.png"
import servicesBgB from "../../assets/illustrations/services_page/consultancy.png"
import servicesBgC from "../../assets/illustrations/services_page/engineering_and_implementation.png"

const Services = () => {
  const servicesBullets = {
    servicesBulletsA: <p>• Knowledge Management & Sustainability<br/>• Conceptualization<br/>• Process Improvement & Optimization</p>,
    servicesBulletsB: <p>• Project & Program Management<br/>• System design<br/>• Electrical Engineering & design<br/>• Functional & detailed design<br/>• System Integration<br/>• Software development<br/>• Assembly & Manufacturing of Control & Electrical Panels<br/>• Testing<br/>• On Site installation & Commissioning</p>,
  }
  return (
    <div data-aos="fade-right">
      {/* Content 1 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start lg:hidden">SERVICES</h1>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl hidden lg:block">OUR <span>SERVICES</span></h1>
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">The RC team is made up of individuals who are experts in understanding the markets in which they work. They understand exactly what the client wants and know how best to deliver the required solution to the highest possible standards.</p>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Services" src={servicesIntroIllustration} />
          </div>
        </div>
      </div>
      
      {/* Content 2 */}
      <div className="container px-6 m-auto my-14 lg:my-28 flex flex-wrap flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-4">
        <ServicesDetails servicesTitle="Trading and Supply of All Types of Engineering Goods" servicesBackground={servicesBgA} servicesBullets={servicesBullets.servicesBulletsA} />
        <ServicesDetails servicesTitle="Consultancy" servicesBackground={servicesBgB} servicesBullets={servicesBullets.servicesBulletsB} />
        <ServicesDetails servicesTitle="Engineering and Implementation" servicesBackground={servicesBgC} />
      </div>

      {/* Content 3 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start mb-10">CONSULTANCY</h1>
        <p className="text-center text-sm lg:text-left my-4">As your business consultancy we can help you set goals and define your strategic principles.</p>
        <p className="text-center text-sm lg:text-left my-4">We will ensure their measurable and sustainable implementation by providing you with the concepts and process stages necessary for the successful and methodical implementation of change.</p>
        <p className="text-center text-sm lg:text-left my-4">Our consulting teams demonstrate a wealth of experience in business process management as well as extensive domain knowledge and an excellent understanding of IT, all of it focused on helping you to implement and sustain your business strategy.</p>
        <p className="text-center text-sm lg:text-left my-4">By listening, learning, responding and adapting to emergent client needs, we constantly stretch ourselves to remain at the forefront of technological and business services innovation</p>
      </div>

      {/* Content 4 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start mb-10">TECHNOLOGY</h1>
        <p className="text-center text-sm lg:text-left my-4">For many organizations the success or failure of IT initiatives is predicated on the selection of the appropriate technology vendor. Despite the critical nature of this process, many organizations underestimate the time and effort it takes to make a well-informed decision.</p>
        <p className="text-center text-sm lg:text-left my-4">Technology projects are often not just about the technology, but rather the health and effectiveness of the entire organization therefore we collaborate with clients to align IT strategy and technology solutions to business strategy to ensure future business growth and innovation.</p>
        <p className="text-center text-sm lg:text-left my-4">We work closely with hardware and software vendors to help us extend the range of capabilities and solutions we can offer.</p>
        <p className="text-center text-sm lg:text-left my-4">• Gather requirements<br/>• Research and refine options<br/>• Evaluate vendors<br/>• Select and engage vendors<br/>• Manage implementation<br/>• Support and maintenance</p>
      </div>

    </div>
  )
}

const ServicesDetails = (props) => {
  return(
    <div className="my-4">
      <div className="flex items-center justify-between servicesDetailsContainer px-4 rounded-2xl gap-4 w-80 lg:w-96">
        <h4 className="text-base w-44">{props.servicesTitle}</h4>
        <div className="servicesDetailsBackground">
          <img alt="Trading" src={props.servicesBackground} />
        </div>
      </div>
      <div className="mt-4 lg:mt-10 ml-4 w-80 lg:w-96">
        <h5 className="max-w-md text-sm">{props.servicesBullets}</h5>
      </div>
    </div>
  )
}

export default Services