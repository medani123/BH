import React from 'react'
import './AboutCompany.css'

import AboutHealth from '../Compoents/Company/AboutHealth'

import AboutStories from '../Compoents/Company/AboutStories'

import SouthIcon from '@mui/icons-material/South';
import AboutBrands from '../Compoents/Company/AboutBrands';

const AboutCompany = () => {
  return (
   <>
   <div  class="hero-container">
   <div className="container">
   <div className="row">
    <div className="col-md-12">
    <div className='hero ms-lg-5 ps-lg-2'>
    <div className="hero__text ps-lg-1">
    <h1 className='mb-5 about__head'>About Us</h1>
    <p className='about__para'>We are the leading energy technology company. We design, <br />
     manufacture and service transformative technologies to help take <br /> energy forward.</p>
    </div>
  </div>
    </div>
   </div>
   </div>
   </div>

   <div className="container my-5">
    <div className="row about__all-middle">
        <div className="col-md-5">
        <div className="about__dash mb-3">
        <div className="about__dash-line  me-3"></div>
        <div className="about__dast-text">ABOUT US</div>
    </div>

    </div>


    <div className="col-md-8">
    <h3 className='about__description-middle mb-4 '>For more than a century, our inventions have revolutionized energy. We harness the power of engineering, data, and science to redefine what's possible.</h3>
</div>

    <div className="button d-flex mb-5">
    <button type="button" class="btn btn-success about__button"><SouthIcon /></button>
    <p className='mt-3 ms-4'>EXPLORE</p>
    </div>
    </div>
   </div>


   <div className="about__bg-img">

   <div className="container">
   <div className="row">
    <div className="col-md-6 ">
    <div className="about__dash-line2 mb-5"></div>
    <div className="about__global-desc px-0 mb-4 mt-3">
    <h1 className=''> We are global</h1>
    <p className='mb-5'>But we're local too. With business conducted in more than 120 countries we work in partnership with our customers, wherever they are, to deliver better outcomes. We are proud that our people and our businesses are part of the fabric of the communities in which they work.</p>
    </div>

    </div>
   </div>
   <div className="row ">
    <div className="col-md-4 about__global-achived">

        <div className="about-global-text px-5">
        <h1 className='mb-5'>204</h1>
        <p>We achieved 204 Perfect HSE Days in 2021. The Perfect HSE Day means all employees go home safely to their families and the environment is not harmed.</p>
        </div>

    </div>
    <div className="col-md-4 about__global-achived">
        <div className="about-global-text px-5">
        <h1 className='mb-5'>120+</h1>
        <p>We conduct business in 120+ countries worldwide. A company of global scale with local know-how and commitment to service.</p>
        </div>


    </div>
    <div className="col-md-4 about__global-achived">
        <div className="about-global-text px-5">
        <h1 className='mb-5'>54,000</h1>
        <p>We are committed to an inclusive and collaborative culture, helping our ~54,000 employees develop their careers and thrive at work every day.</p>
        </div>


    </div>
   </div>
   </div>
</div>

<div className="container my-5">
<div className="row">
<div className="about__dash-line2 mb-5 ms-3"></div>
<h1 className='mt-3 mb-5'>Company leadership</h1>
    <div className="col-md-6">
        <div className="leadership__img">
            <img src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-09/09272019_aboutus_i3%402x.jpg?itok=-zPXDRLJ" alt="" className='img-fluid' />

            <div className="about__dash mb-3 mt-5">
                        <div className="about__dash-line  me-3"></div>
                        <div className="about__dast-text">COMPANY LEADERSHIP</div>
             </div>
             <h3><b>Management team</b></h3>
             <p>Our executive management team supports the long-term <br /> interests of shareholders, employees, customers, suppliers, and <br /> the communities where we do business.</p>

             <div className="protect__button my-4">
                           <button class="m-auto variable-button h6" data-text="LEARN MORE" data-texthover=">"></button>


              </div>

        </div>
    </div>


    <div className="col-md-6">
        <div className="leadership__img">
            <img src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-09/09242019_aboutus_i4%402x.jpg?itok=zZNSIpD4" alt=""   className='img-fluid'/>

            <div className="about__dash mb-3 mt-5">
                        <div className="about__dash-line  me-3"></div>
                        <div className="about__dast-text">COMPANY LEADERSHIP</div>
             </div>
             <h3><b>Management teamBoard of directors</b></h3>
             <p>Our board is active and engaged, and supports a culture of <br /> open dialogue, collaboration, and rigorous decision-making to <br /> create long-term stakeholder value.</p>

             <div className="protect__button my-4">
                           <button class="m-auto variable-button h6" data-text="LEARN MORE" data-texthover=">"></button>


              </div>

        </div>
    </div>
</div>
</div>



<div className="container my-5">
    <div className="row">
    <div className="col-md-12">
    <div className="about__dash-line2  ms-2"></div>
    <h1 className='mt-3 mb-3 '>How we're organized</h1>
    <div className="about__organized-text">
    <p >We are an energy technology company that has a diverse portfolio of equipment and service capabilities that span the energy and industrial <br /> value chain. Our two operating segments are organized based on the nature of our markets and customers, and consist of similar products and services.</p>

    <h5 className='my-3 ms-2 '> OILFIELD SERVICES & EQUIPMENT</h5>
    <p>
    The OFSE segment provides products and services for onshore and offshore oilfield operations across the lifecycle of a well, ranging from exploration, appraisal, and development; to production, rejuvenation, and decommissioning. The segment is organized into four product lines: Well Construction, which focuses on drilling and its components (drill bits, drilling fluids, and drilling services); Completions, Intervention, and Measurements, which encompasses well completions, wireline services, and pressure pumping services; Production Solutions, which spans artificial lift systems and chemicals; and Subsea & Surface Pressure Systems, which facilitates the safe and reliable control and flow of hydrocarbons from the wellhead to production facilities.
    </p>
    <p>
    Beyond its traditional oilfield concentration, OFSE is expanding its capabilities and technology portfolio to meet the challenges of a net-zero future. These efforts include expanding into new energy areas such as geothermal and CCUS, strengthening its digital architecture and addressing key energy market themes, and never wavering from a longstanding and recognized commitment to safety and execution.
    </p>

    <h5>INDUSTRIAL & ENERGY TECHNOLOGY</h5>
    <p>
    The Industrial & Energy Technology (IET) segment combines a broad array of domain expertise, technologies, and services for industrial and energy customers. Our solutions unlock the ability to transform, transfer, and transport energy efficiently, while capturing and cutting emissions, solving a fundamental challenge behind the energy transition: reducing environmental impact, while maximizing efficiency, productivity, and reliability.
    </p>

    <p>The IET organization consists of four solution platforms which all build on Baker Hughes existing and strong foundation of rotating equipment, electric-power, pumps, valves, gears, sensor, precision instrumentation, and industrial software technologies and services:</p>

    <p><b>Industrial Technology</b> <i>Improving industry productivity and ensuring reliable quality and safety</i></p>

    <p>IET provides Industrial Technology solutions that serve a broad array of industries including petrochemical & refining, nuclear, aviation, automotive, mining, cement, metals, pulp and paper, and food & beverage.</p>

    <p><b>Climate Technology Solutions: </b><i> Decarbonizing energy and hard to abate industries</i></p>

    <p>IET’s Climate Technology Solutions span carbon capture, utilization and storage, hydrogen, clean power and emissions management capabilities to enable energy operators as well as broader industry, in particular the hard-to-abate sectors to achieve a reliable, net-zero energy system</p>

    <p><b>Industrial Asset Management:</b> <i>Optimizing industrial asset performance with simple, flexible, connected hardware and software solutions</i></p>

    <p className='mb-5'>IET’s Industrial Asset Management Solutions combine sophisticated hardware technologies with enterprise-class software products and analytics to connect industrial assets, providing customers with the data, safety and security needed to optimize operations reliably and efficiently.</p>

    </div>
    </div>
    </div>
</div>

   <div className="container my-5">
   <AboutHealth/>
   <AboutStories />
   <AboutBrands />
   </div>

   <div className="container-fluid border_top">
    <div className="row">
        <div className="col-md-6">
            <div className="margin__left-find">
            <h2 className='my-4'><b>Want to find out  more?</b></h2>
            <p className='my-3 find__para'>We have a team of experts ready to answer your <br /> questions and help you get what you need. </p>
            <div className="protect__button my-4">
                <button class="m-auto variable-button h6" data-text="LEARN MORE" data-texthover=">"></button>
            </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="find__img ">
                <img src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/medium_2_1_2x_1920x951_/public/2019-09/Innovation%20and%20Ventures%20I10_0.jpg?itok=DhC198xX" alt="" className='img-fluid' />
            </div>
        </div>
    </div>
   </div>

   </>

  )
}

export default AboutCompany