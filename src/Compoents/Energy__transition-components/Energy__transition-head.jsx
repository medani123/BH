import React from 'react'
import './energy__commitment-head.css'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import {video} from '../../constant'

import HeroSecComp from "./../Hero__Sec-component"


const EnergyTransitionHead = (props) => {
  return (
    <div className='energy_head'>
      <HeroSecComp
          video={video}
          title="Energy transition"
          desc="Our energy technology helps industry advance on the path to net-zero and a sustainable energy future."
          linkIcon={<ArrowDownwardIcon />}
          link="Explore"
      />
    </div>
  )
}

export default EnergyTransitionHead