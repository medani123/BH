import React from 'react'
import './AboutHealth.css'
import "../../container/AboutCompany.css"
function AboutStories() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>

                    <div className='col-md-6 my-5'>

                        <div className='sectionTwo-text1  '>
                            <div className="about__dash mb-3">
                                <div className="about__dash-line  me-3"></div>
                                <div className="about__dast-text">ENERGY FORWARD STORIES</div>
                            </div>
                            <h3 className='my-4'>Stories from Baker Hughes and<br /> beyond</h3>
                            <p className='mt-3'>What's an energy technology company? We're so glad you <br /> asked. Discover our latest stories showcasing the <br /> innovations and people shaping the future of our industry. </p>
                            <div className="protect__button my-4">
                                <button class="m-auto variable-button h6" data-text="LEARN MORE" data-texthover=">"></button>


                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className='col-md-5'>
                        <div className='img-fluid mt-2  HomeSectionTwo1 '>
                            <img src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-10/cardef.jpg?itok=SW6H8tQv" alt='' />
                        </div>
                    </div>


                </div>
            </div>
        </>


    )
}


export default AboutStories