import React from 'react'

import './FeaturedCapabilitiesCards.css'

function FeaturedCapabilitiesCard(props) {
  return (
    <div className='EnergyTransitionMainCard-container mt-4'>
        <div className='energy_card-container p-4 d-flex justify-content-center'>
          <div className='energy_card-icon d-flex align-items-center'>
              <span>{props.icon}</span>
          </div>
          <div className="energy_card-data d-flex justify-content-center flex-column px-4">
              <h4 className='mb-0'>{props.title}</h4>
              <p>{props.desc}</p>
          </div>
        </div>
    </div>
  )
}

export default FeaturedCapabilitiesCard