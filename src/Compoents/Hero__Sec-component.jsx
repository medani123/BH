import React from 'react'
import './Hero_Sec-comp.css'


const HeroSecComp = (props) => {
  return (
    <div className='hero_head'>
        <video autoplay="autoplay" loop="loop" muted="muted" width="100%"  __idm_id__="11304961">
            <source src={props.video} />
        </video>
        <div className='hero_head-data'>
            <h2>{props.title}</h2>
            <p className='mx-3'>{props.desc}</p>
            <a href="#" className='d-flex'>
              <div className='arrow__down-icon'>
                {props.linkIcon}
              </div>
              <span className='my-2 mx-4' style={{ fontSize: 18 }}>{props.link}</span>
            </a>
        </div>
    </div>
  )
}

export default HeroSecComp