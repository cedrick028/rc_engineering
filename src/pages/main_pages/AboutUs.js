import React from 'react'

import aboutUsIntroAIllustration from '../../assets/illustrations/about_page/intro_a.png'
import aboutUsIntroBIllustration from '../../assets/illustrations/about_page/intro_b.png'
import aboutUsExpertiseIllustration from '../../assets/illustrations/about_page/expertise.png'

import philosophyMissionImage from '../../assets/illustrations/about_page/mission.png'
import philosophyVisionImage from '../../assets/illustrations/about_page/vision.png'

const AboutUs = () => {
  return (
    <div data-aos="fade-right">

      {/* Content 1 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start lg:hidden">ABOUT <span>US</span></h1>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl hidden lg:block">ABOUT <span>US</span></h1>
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">RC is a specialist Consulting, Systems Integration and Trading company providing critical solutions and advisory services to Oil & Gas, Utilities, Transport Infrastructure and Manufacturing sectors.RC is a specialist Consulting, Systems Integration and Trading company providing critical solutions and advisory services to Oil & Gas, Utilities, Transport Infrastructure and Manufacturing sectors.</p>
            <p className="text-xs md:text-sm max-w-2xl text-center lg:text-start">RC aims to become the worldwide leader in delivering Integrated Business Solutions to our Clients by way of providing: Consultancy, Technology and Services.</p>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Services" src={aboutUsIntroAIllustration} />
          </div>
        </div>
      </div>

      {/* Content 2 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="illustrations mb-5 lg:mb-0 lg:ml-10 2xl:ml-0">
            <img alt="Services" src={aboutUsIntroBIllustration} />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">Our business is driven by the need and the demand for specialist capabilities where our clients are increasingly resolute about the depth of skills they need and sophisticated clients, facing ever more complex issues, look to consulting firms to provide deeper and deeper expertise.</p>
            <p className="text-xs md:text-sm max-w-2xl mb-5 lg:mb-10 text-center lg:text-start">Our business is driven by the need and the demand for specialist capabilities where our clients are increasingly resolute about the depth of skills they need and sophisticated clients, facing ever more complex issues, look to consulting firms to provide deeper and deeper expertise.</p>
            <p className="text-xs md:text-sm max-w-2xl text-center lg:text-start">We add true business value and reduce the risk profile throughout the life cycle of a project from concept development, design and implementation of a solution through to organizational change management, knowledge transfer and sustainability.</p>
          </div>
        </div>
      </div>
      
      {/* Content 3 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start lg:hidden">OUR PHILOSOPHY</h1>
        <PhilosophyContent philosophyImage={philosophyMissionImage} philosophyTitle="Mission" philosophyText="To offer expert consulting, leading edge technology and a high class service through our competent business solutions to bridge the skills gap between process and business management." />
        <PhilosophyContent philosophyImage={philosophyVisionImage} philosophyTitle="Vission" philosophyText="RC aims to become the worldwide leader in delivering Integrated Business Solutions." />
      </div>
      
      {/* Content 4 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start lg:hidden">OUR EXPERTISE</h1>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl hidden lg:block">OUR EXPERTISE</h1>
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">RC can offer Integrated Automation, Electrical & Business Solutions from a wide portfolio of industry leading technology partners, enabling us to provide cost effective, bespoke services to our clients. Our expertise encompasses the complete value chain of our solutions offering expert methodologies and technology programs, bringing the deepest and most sophisticated capabilities and skills to our clients. Its our teams deep knowledge and thought leadership, coupled with our core competencies and extensive industry know-how which allows us to offer our clients fresh perspectives and breakthrough business insights across the enterprise.</p>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Services" src={aboutUsExpertiseIllustration} />
          </div>
        </div>
      </div>

    </div>
  )
}

const PhilosophyContent = (props) => {
  return(
    <div className="flex flex-col justify-center gap-6 md:gap-10 lg:flex-row lg:justify-start lg:items-center lg:gap-36 my-10">
      <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center lg:text-left block lg:hidden">{props.philosophyTitle}</h2>
      <div className="m-auto lg:m-0 missionVissionImg rounded-2xl shadow-md">
        <img alt="Mission" src={props.philosophyImage} />
      </div>
      <div className="lg:w-full">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-10 text-center lg:text-left hidden lg:block">{props.philosophyTitle}</h2>
        <p className="text-xs md:text-sm text-center lg:text-left">{props.philosophyText}</p>
      </div>
    </div>
  )
}

export default AboutUs