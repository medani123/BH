import React from 'react'

import './energy__commitment-head.css'

import {commitment} from '../../constant'

function EnergyCommitmentBody() {
  return (
    <div className='Energy__commitment-body'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='Energy__commitment-img w-100'>
              <img
                src={commitment}
                alt='commitment'
                className='img-fluid w-100'
              />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='Energy__commmitment-data me-lg-5'>
              <h3>Our ambitions</h3>
              <p>
                Baker Hughes is committed to reducing our emissions by 50% by
                2030 and net-zero by 2050
              </p>
              <p>
                We are bringing our core technology capabilities to lead in the
                energy transition and enable a decarbonization path for energy
                and industry
              </p>
              <p>
                We are taking energy forward by delivering the highest
                efficiency productivity outcomes for broader energy and industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnergyCommitmentBody
