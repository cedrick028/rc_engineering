import React from 'react'
import { Link } from 'react-router-dom'

// Illustrations
import homeIntroIllustration from '../../assets/illustrations/home_page/intro.png'
import homeAboutIllustration from '../../assets/illustrations/home_page/about.png'
import homeServicesIllustration from '../../assets/illustrations/home_page/services.png'
import homeIndustriesIllustration from '../../assets/illustrations/home_page/industry.png'
import homeContactIllustration from '../../assets/illustrations/home_page/contact.png'

// Industry Icons
import oilAndGas from "../../assets/icons/industries/oil_and_gas.png"
import utilities from "../../assets/icons/industries/utilities.png"
import transport from "../../assets/icons/industries/transport.png"
import waterAndWasteWater from "../../assets/icons/industries/water_and_waste_water.png"

const Home = () => {
  return (
    <div>
      {/* Content 1 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start lg:hidden">MASTERS <span>AT WORK</span></h1>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl hidden lg:block">MASTERS <span>AT WORK</span></h1>
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">Welcome to our company! We are a dynamic and innovative organization dedicated to delivering top-notch solutions and services to our valued clients. With a strong focus on excellence and customer satisfaction, we strive to exceed expectations and create lasting partnerships.</p>
            <Link to="/ContactUs"><button className="rounded-xl text-xs md:text-sm">Inquire now</button></Link>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Building" src={homeIntroIllustration} />
          </div>
        </div>
      </div>

      {/* Content 2 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center lg:hidden">About <span>RC Engineering</span></h2>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="illustrations mt-10 lg:mt-0">
            <img alt="Engineer" src={homeAboutIllustration} />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block mb-5">About <span>RC Engineering</span></h2>
            <p className="text-xs md:text-sm max-w-3xl text-center lg:text-start my-5">RC is a specialist Consulting, Systems Integration and Trading company providing critical solutions and advisory services to Oil & Gas, Utilities, Transport Infrastructure and Manufacturing sectors.</p>
            <p className="text-xs md:text-sm max-w-3xl text-center lg:text-start">RC aims to become the worldwide leader in delivering Integrated Business Solutions to our Clients by way of providing: Consultancy, Technology and Services.</p>
            <Link to="/AboutUs"><button className="rounded-xl text-xs md:text-sm mt-10">Read more</button></Link>
          </div>
        </div>
      </div>

      {/* Content 3 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center lg:hidden">Services <span>We Provide</span></h2>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block">Services <span>We Provide</span></h2>
            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">We provide a wide range of exceptional services tailored to meet the unique needs of our clients. With a commitment to excellence and customer satisfaction, we strive to deliver top-notch solutions that drive growth and success.</p>

            <p className="text-xs md:text-sm max-w-2xl text-center lg:text-start">• Trading and Supply of all types of Engineering Goods</p>
            <p className="text-xs md:text-sm max-w-2xl text-center lg:text-start">• Engineering & Implementation</p>
            <p className="text-xs md:text-sm max-w-2xl text-center lg:text-start">• Consultancy</p>

            <p className="text-xs md:text-sm max-w-2xl my-5 lg:my-10 text-center lg:text-start">The RC team is made up of individuals who are experts in understanding the markets in which they work. They understand exactly what the client wants and know how best to deliver the required solution to the highest possible standards.</p>
            <Link to="/Services"><button className="rounded-xl text-xs md:text-sm">Check our services</button></Link>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Services" src={homeServicesIllustration} />
          </div>
        </div>
      </div>

      {/* Content 4 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center lg:hidden">Industry <span>We Serve</span></h2>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block">Industry <span>We Serve</span></h2>
            <p className="text-xs md:text-sm max-w-3xl my-5 lg:my-10 text-center lg:text-left">Unlocking Innovation Through Engineering Excellence. Our engineering services blend cutting-edge technology with unmatched expertise to solve complex challenges. From concept to completion, we provide comprehensive solutions that drive efficiency, sustainability, and success for your projects. Let us engineer your vision into reality.</p>
            <div className="flex flex-wrap mt-10 gap-3 justify-center lg:justify-start">

              <Link to="/OilAndGas"><HomeIndustryList industryIcon={oilAndGas} industryTitle="Oil & Gas" /></Link>
              <Link to="/Utilities"><HomeIndustryList industryIcon={utilities} industryTitle="Utilities" /></Link>
              <Link to="/TransportInfrastructure"><HomeIndustryList industryIcon={transport} industryTitle="Transport Infrastructure" /></Link>
              <Link to="/WaterAndWasteWater"><HomeIndustryList industryIcon={waterAndWasteWater} industryTitle="Water and Waste Water" /></Link>

            </div>
          </div>
          <div className="illustrations mt-10 lg:mt-0 lg:ml-10 2xl:ml-0">
            <img alt="Industries" src={homeIndustriesIllustration} />
          </div>
        </div>
      </div>
      
      {/* Content 5 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center lg:hidden">Contact <span>Us</span></h2>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="illustrations mt-10 lg:mt-0">
            <img alt="Engineer" src={homeContactIllustration} />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl hidden lg:block">Contact <span>Us</span></h2>
            <p className="text-xs md:text-sm max-w-3xl my-5 text-center lg:text-left">It is my pleasure to introduce our contact. With an innovative and forward-thinking mindset, we strive to build meaningful connections and foster collaboration.</p>
            <div className="flex flex-col lg:flex-row my-5 gap-4 items-center lg:items-start">
              <HomeContactDetails contactTitle="Sales" contactNumber="+91-91673 20368" contactEmail="sales@rcengineering.in" />
              <HomeContactDetails contactTitle="Inquiry" contactNumber="+91-93267 79454" contactEmail="estimation@rcengineering.in" />
            </div>
            <Link to="/ContactUs"><button className="rounded-xl text-xs md:text-sm mt-5">Message us</button></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

const HomeIndustryList = (props) => {
  return(
  <div className="flex flex-col items-center justify-center rounded-lg homeIndustryContainer">
    <div className="industryIcons">
      <img alt="Barrel" src={props.industryIcon} />
    </div>
    <p className="text-base mt-2 industryTitles px-2">{props.industryTitle}</p>
  </div>
  )
}

const HomeContactDetails = (props) => {
  return(
    <div className="contactDetailsContainer rounded-2xl w-64 p-5 shadow-md">
      <h3 className="text-2xl mb-3">{props.contactTitle}</h3>
      <p>{props.contactNumber}</p>
      <p>{props.contactEmail}</p>
    </div>
  )
}

export default Home