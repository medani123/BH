import React from 'react'

import "./energy__commitment-head.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function EnergyCommitmentHead() {
  return (
    <div className='energy__commitment-head-container'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='energy__commitment-head'>
                        <div  className='hr mt-4'/>
                        <p className=' text-uppercase my-3'>our commitment</p>
                        <h2 className='my-4'>One of the first in the oil and gas industry to make a net-zero carbon commitment</h2>
                        <p className=' text-uppercase mt-3 mb-5 animate'>
                            learn about our corporate responsibility
                            <ArrowForwardIosIcon className="arrow-icon" style={{ fontSize: 15 }}/>
                        </p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default EnergyCommitmentHead