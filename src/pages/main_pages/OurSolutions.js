import React from 'react'

import solutionsIntroIllustration from "../../assets/illustrations/solutions_page/intro.png"

// Icons
import solutionsIconOne from "../../assets/icons/numbers/one.png"
import solutionsIconTwo from "../../assets/icons/numbers/two.png"
import solutionsIconThree from "../../assets/icons/numbers/three.png"
import solutionsIconFour from "../../assets/icons/numbers/four.png"
import solutionsIconFive from "../../assets/icons/numbers/five.png"
import solutionsIconSix from "../../assets/icons/numbers/six.png"
import solutionsIconSeven from "../../assets/icons/numbers/seven.png"
import solutionsIconEight from "../../assets/icons/numbers/eight.png"
import solutionsIconNine from "../../assets/icons/numbers/nine.png"

const OurSolutions = () => {
  const solutionsTitles = {
    solutionsTitleOne: "PLC and DCS Advanced Control  and Automation",
    solutionsTitleTwo: "Field Device Integration",
    solutionsTitleThree: "IT Services",
    solutionsTitleFour: "Process Instrumentation",
    solutionsTitleFive: "Program and Project Management",
    solutionsTitleSix: "System Integration",
    solutionsTitleSeven: "Containerized E-House Solutions",
    solutionsTitleEight: "Building Management Systems",
    solutionsTitleNine: "RTU and Telemetry Solutions",
  }

  const solutionsTexts = {
    solutionsTextOne: <p>Automation and control systems are used throughout the industry from oil & gas field operations, to production and processing plants, and distribution and retailing of petroleum products.<br/><br/>We are a leading provider of advanced automation, control and information solutions including system engineering, integration and implementation with offerings including:<br/><br/>• Control system conﬁguration and integration.<br/>• Process Control – SCADA & PLC Systems<br/>• Distributed Control Systems (DCS)<br/>• High level redundant systems – PLC & SCADA</p>,

    solutionsTextTwo: <p>Field Device Integration (FDI) enables users and manufacturers to integrate their field devices into systems, asset management solutions and device configuration solutions to a single standard. This reduces lifecycle costs, simplifies handling and minimizes technical risks.<br/><br/>Globally leading control system and device manufacturers, such as ABB, Emerson, Endress+Hauser, Honeywell, Invensys, Siemens and Yokogawa, along with the major associations FDT Group, Fieldbus Foundation, HART Communication Foundation, OPC Foundation, PROFIBUS & PROFINET International, are supporting and driving forward the development of the FDI Technology together.<br/><br/>Our solution offerings for FDI include:<br/><br/>• Recommendations on and selection of latest technologies available from OEM’s<br/>• Field Device Design (P&ID’s, Hook-up Drawings etc)<br/>• Supply of instrumentation and associated equipment<br/>• Pre commissioning and commissioning<br/>• Instrument test and calibration (Onsite and Offsite)<br/>• Pre commissioning and commissioning</p>,

    solutionsTextThree: <p>RC experience and technical expertise in IT services provides innovative solutions to our clients to achieve their business objectives. Our team of engineers helps the clients to manage complex implementation of change in the business process through advanced framework and methodology.<br/><br/>RC IT services provide a comprehensive range of solutions that can be customized to meet each client’s unique requirements. Our engineers have an extensive portfolio of technical skills. Our system engineers integrate software and hardware components into an optimally tuned solution according to client’s project requirements.<br/><br/>RC IT services provide a comprehensive range of solutions that can be customized to meet each client’s unique requirements. Our engineers have an extensive portfolio of technical skills. Our system engineers integrate software and hardware components into an optimally tuned solution according to client’s project requirements.<br/><br/>IT services provided by RC includes:<br/><br/>• Technical program management and troubleshooting<br/>• Infrastructure design and build<br/>• Enterprise architecture<br/>• Application design and build<br/>• Application and data migration<br/>• Integration and testing<br/>• Service management</p>,

    solutionsTextFour: <p>A control system is only as good as its instrumentation. RC personnel include highly trained and experienced instrumentation and process control technicians and engineers with many years of experience in the instrumentation and process control field.<br/><br/>A control system is only as good as its instrumentation. RC personnel include highly trained and experienced instrumentation and process control technicians and engineers with many years of experience in the instrumentation and process control field.<br/><br/>A control system is only as good as its instrumentation. RC personnel include highly trained and experienced instrumentation and process control technicians and engineers with many years of experience in the instrumentation and process control field.<br/><br/>• Pressure Measurement<br/>• Temperature Measurement<br/>• Flow Measurement<br/>• Level Measurement<br/>• Process Protection<br/>• Process Controllers<br/>• Process Recorders<br/><br/>And other measuring instruments and controls.</p>,

    solutionsTextFive: <p>Programme and Project Management is the discipline of planning, organizing, managing and optimizing resources. Working alongside your key staff, within your team, across your organization, RC supplies hands-on programme and project managers, support functions and trusted advisors to support programme governance.<br/><br/>One single focal point offering clear, consistent leadership with a constant eye on progress and performance is essential for successful delivery. The scope of our high value services in the discipline of planning, organising, securing, managing, leading and controlling resources includes:<br/><br/>• Procurement process support<br/>• Leading negotiations and post contract management<br/>• Supplier management<br/>• Project rescue<br/>• Project Management Framework</p>,

    solutionsTextSix: <p>With significant experience of turning an integration vision into operational reality, RC understands that true integration is more than just a network of devices.<br/><br/>It demands complex connections, interfaces and security controls so that you are able to manage the real-time flow of information that’s so essential to your business operations.<br/><br/>We believe that information gathered from a variety of different system sources and then processed to deliver a single operational view will yield genuine intelligence that greatly enhances business decision-making and overall organizational efficiency. RC is skilled in building infrastructures which are scalable, reliable and cost effective requiring the integration of multi vendor solutions, products and technologies covering:<br/><br/>• System development – PLC, DCS, SCADA<br/>• Hazardous Area Applications<br/>• Turnkey<br/>• SCADA integration</p>,

    solutionsTextSeven: <p>RC is fully capable to provide the containerized e-house solutions to its customers. Delivery approach comprises of pre-installation of all the necessary equipment in a properly designed industrial building. These industrial buildings are portable equipment rooms or e-Houses with all the equipment tested and pre-configured prior deploying at the customer’s site.<br/><br/>RC’s e-House solution integrates major power, control and telecommunication equipment into prefabricated electrical buildings. They are customized to suit various environmental conditions and applications.<br/><br/>RC offers the containerized e-House solutions for the following deployments:<br/><br/>• LV & MV setups<br/>• Electrical equipment setups<br/>• Control System rooms<br/>• Operator & Maintenance setups<br/>• IT & Networking setups<br/>• Server setups</p>,

    solutionsTextEight: <p>If you want to reduce energy expenses, optimize building equipment performance, enhance occupants' comfort, or comply with national directives, taking control of your building is key. A BMS installation or retrofit is the quickest, simplest, and most cost-effective solution, regardless of your building's size or age.<br/><br/>If you want to reduce energy expenses, optimize building equipment performance, enhance occupants' comfort, or comply with national directives, taking control of your building is key. A BMS installation or retrofit is the quickest, simplest, and most cost-effective solution, regardless of your building's size or age.<br/><br/>RC helps to create smarter buildings that support future building management strategies. We design building management solution to simplify BMS so you can view and monitor your building remotely through a single interface.</p>,

    solutionsTextNine: <p>RC provides cost-effective, high-performance Telemetry and RTU solutions for remote monitoring and control including many standard interface protocols. Our solutions are based on our clients’ preferred SCADA software and RTU products along with an engineered communications package to provide a total telemetry system.<br/><br/>Telemetry and RTU solutions systems allow you to monitor and control ﬁeld operations across a widely dispersed infrastructure. RTU solutions are available in various conﬁgurations with robust communication to the central SCADA system.</p>,
  }
  return (
    <div>
      {/* Content 1 */}
      <div className="container px-6 m-auto my-14 lg:my-28">
        <div className="m-auto solutionsIntroIllustration">
          <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start mb-10">OUR <span>SOLUTIONS</span></h1>
          <img alt="Solutions" src={solutionsIntroIllustration} />
        </div>
      </div>
      <div className="container px-6 m-auto my-14 lg:my-28">
        <SolutionsList solutionsIcon={solutionsIconOne} solutionsTitle={solutionsTitles.solutionsTitleOne} solutionsText={solutionsTexts.solutionsTextOne} />
        <SolutionsList solutionsIcon={solutionsIconTwo} solutionsTitle={solutionsTitles.solutionsTitleTwo} solutionsText={solutionsTexts.solutionsTextTwo} />
        <SolutionsList solutionsIcon={solutionsIconThree} solutionsTitle={solutionsTitles.solutionsTitleThree} solutionsText={solutionsTexts.solutionsTextThree} />
        <SolutionsList solutionsIcon={solutionsIconFour} solutionsTitle={solutionsTitles.solutionsTitleFour} solutionsText={solutionsTexts.solutionsTextFour} />
        <SolutionsList solutionsIcon={solutionsIconFive} solutionsTitle={solutionsTitles.solutionsTitleFive} solutionsText={solutionsTexts.solutionsTextFive} />
        <SolutionsList solutionsIcon={solutionsIconSix} solutionsTitle={solutionsTitles.solutionsTitleSix} solutionsText={solutionsTexts.solutionsTextSix} />
        <SolutionsList solutionsIcon={solutionsIconSeven} solutionsTitle={solutionsTitles.solutionsTitleSeven} solutionsText={solutionsTexts.solutionsTextSeven} />
        <SolutionsList solutionsIcon={solutionsIconEight} solutionsTitle={solutionsTitles.solutionsTitleEight} solutionsText={solutionsTexts.solutionsTextEight} />
        <SolutionsList solutionsIcon={solutionsIconNine} solutionsTitle={solutionsTitles.solutionsTitleNine} solutionsText={solutionsTexts.solutionsTextNine} />
      </div>
    </div>
  )
}

const SolutionsList = (props) => {
  return(
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 my-14 lg:my-28">
      <div>
        <div className="solutionsIcons">
          <img alt="numbers" src={props.solutionsIcon} />
        </div>
      </div>
      <div>
        <h2 className="mb-10 text-xl lg:text-3xl">{props.solutionsTitle}</h2>
        <h5 className="my-4 text-xs md:text-sm">{props.solutionsText}</h5>
      </div>
    </div>
  )
}

export default OurSolutions