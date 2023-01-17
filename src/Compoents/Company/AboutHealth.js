import React from 'react'
import './AboutHealth.css'
import "../../container/AboutCompany.css"
function AboutHealth() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                <div className='col-md-5'>
                        <div className='img-fluid mt-2  HomeSectionTwo1 '>
                            <img src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_2600x2600/public/2019-10/hse.webp?itok=IvjWvz9_" alt="" className='w-100 ' />
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className='col-md-6 my-5'>

                        <div className='sectionTwo-text1  '>
                        <div className="about__dash mb-3">
                        <div className="about__dash-line  me-3"></div>
                        <div className="about__dast-text">HEALTH, SAFETY, ENVIRONMENT</div>
                    </div>
                            <h3 className='my-4'>Protecting our people and the<br /> environment</h3>
                            <p className='mt-3'>We believe in doing the right thing always. Our teams strive <br /> to make every day one with no injuries, accidents or harm to <br /> the environment. </p>
                           <div className="protect__button my-4">
                           <button class="m-auto variable-button h6" data-text="LEARN MORE" data-texthover=">"></button>


                           </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}


export default AboutHealth