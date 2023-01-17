import React from 'react'


import Card from "./Card"



const FrameworkCards = () => {
  return (
    <>


    <div className="container my-5">
    <div className="our__framework-all ">
    <p>OUR FRAMEWORK</p>
    </div>
    <h1 className='text-center mb-5 '>We take a dual approach to a sustainable <br /> energy future</h1>
      <div className="row">
        <div className="col-md-6">
        <Card
        img='	https://www.bakerhughes.com/sites/bakerhughes/files/styles/large_3_2_2x/public/2020-12/Energy-transition-capabilities-framework-sustainable-technology-for-tomorrow.webp?h=5a22e328&itok=IFrYfEqj'
        title={<span>Solve for the largest sources of <br /> scope 1 & 2 emissions in energy<br /> operations today</span>}
        description={<span> By deploying the most efficient and least emissive technologies, we can make progress on the path to net-zero today:

          <li className='my-3'>Efficient power and compression</li>
          <li  className='my-3'>Efficient oilfield</li>
          <li  className='my-3' >Emissions management solutions</li>
          <li>Intelligent asset management and optimization</li>
          </span> }
    />
        </div>

        <div className="col-md-6">
        <Card
        img='	https://www.bakerhughes.com/sites/bakerhughes/files/styles/large_3_2_2x/public/2020-12/Energy-transition-capabilities-framework-largest-sources-of-scope-1-and-2-emissions.webp?h=ea95bb15&itok=KAq9KmWq'
        title={<span>And invest in sustainable energy<br /> technology for tomorrow</span>}
        description={<span> By accelerating the adoption and deployment of new fuel sources and emission solutions, we can decarbonize energy for tomorrow:

          <li className='my-2'>Hydrogen</li>
          <li className='my-2'>Carbon capture, use, and storage</li>
          <li  className='my-2' >Emissions management solutions</li>
          <li  className='my-2'>Geothermal</li>
          <li  className='my-2'>Energy storage</li>
          <li>Net-zero LNG</li>
          </span> }

    />
        </div>
      </div>
    </div>
    </>
  )
}

export default FrameworkCards