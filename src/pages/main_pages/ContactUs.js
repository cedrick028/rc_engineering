import React from 'react'

const ContactUs = () => {
  return (
    <div data-aos="fade-right">
      <div className="container px-6 m-auto my-14 lg:my-28">
        <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center xl:text-start xl:hidden">CONTACT <span>US</span></h2>
        <div className="flex justify-between items-center flex-col-reverse xl:flex-row gap-10">
          <div className="flex flex-col items-center xl:items-start">
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl hidden xl:block my-5 lg:my-10">CONTACT <span>US</span></h2>
            <p className="text-xs md:text-sm max-w-3xl my-5 text-center xl:text-left">It is my pleasure to introduce our contact. With an innovative and forward-thinking mindset, we strive to build meaningful connections and foster collaboration.</p>
            <div className="flex flex-col md:flex-row my-5 gap-4 items-center xl:items-start">
              <HomeContactDetails contactTitle="Sales" contactNumber="+91-91673 20368" contactEmail="sales@rcengineering.in" />
              <HomeContactDetails contactTitle="Inquiry" contactNumber="+91-93267 79454" contactEmail="estimation@rcengineering.in" />
            </div>
            {/* <Link to="/ContactUs"><button className="rounded-xl text-xs md:text-sm mt-5">Message us</button></Link> */}
            <a className="button rounded-xl text-xs md:text-sm mt-5" href="mailto:estimation@rcengineering.in">Message us</a>
          </div>
          <div className="mt-10 xl:mt-0">
              <p><iframe id="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3753922331384!2d72.89082727590598!3d19.047225852873936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a0d3478a87%3A0x949a72748a98b002!2sRamakrishna%20Chemburkar%20Marg%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sph!4v1686314002143!5m2!1sen!2sph" width="600" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-3xl shadow-lg border"></iframe>
              </p>
          </div>
        </div>
      </div>  
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

export default ContactUs