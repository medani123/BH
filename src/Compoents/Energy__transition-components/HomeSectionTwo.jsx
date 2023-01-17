import React from 'react'
import "./energy__commitment-head.css"
import { HomeSectionTwo } from '../../constant'
import GetAppIcon from '@material-ui/icons/GetApp';

function SectionTwo() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='sectionTwo-text mt-5'>
                            <hr />
                            <h3>We believe you must know<br /> energy to change energy</h3>
                            <p className='mt-3'>How do we meet the world’s growing demand for energy, and the world’s demands from energy – to be cleaner, safer, more efficient? We believe the answer lies in technology. As an energy technology company, this is the core of our mission – to deliver the highest efficiency solutions today and advance the path to energy decarbonization.</p>
                            <a href="#">LEARN MORE (DOWNLOAD)<GetAppIcon className="getAppIcon" /></a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='img-fluid mt-2  HomeSectionTwo '>
                            <img src={HomeSectionTwo} alt="" className='w-100 ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionTwo