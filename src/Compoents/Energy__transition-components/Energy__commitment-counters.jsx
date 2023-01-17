import React from 'react'
import "./energy__commitment-head.css"

function EnergyCommitmentCounters() {
  return (
    <div className='energy__commitment-counters my-4'>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className='energy__commitment-counter px-5 my-4'>
                        <h3>23%</h3>
                        <p>reduction in Scope 1 & 2 emissions compared to 2019 base year</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className='energy__commitment-counter border-resp px-5 my-4'>
                        <h3>7,163</h3>
                        <p>employee members enrolled in ERGs in 2020</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className='energy__commitment-counter px-5 my-4'>
                        <h3>24%</h3>
                        <p>electricity from renewable and zero-carbon sources</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnergyCommitmentCounters