import React from 'react'
import './Card.css'

function Energy(props) {
    return (
        <div>
            <h4 className='energy_title'>{props.tittle}</h4>
            <p className='energy__text'>{props.text}</p>
            <p className='case-text'>{props.case}</p>
        </div>
        
    )
}
export default Energy;
    