import React from 'react'


import './energy__commitment-head.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function ExpertiseCard(props) {
    return (
        <>
            <div className='card-box text-center mt-5 '>
                
                <div className='card-content-text'>
                    <img src={props.CardImg} alt="" className='img-fluid mt-4' />
                    <div  className='hr mb-2 mt-4 mx-auto'/>
                    <h4 className='m-1'>{props.CardTitle}</h4>
                    <p className='m-2'>{props.Description}</p>
                </div>
                <a href="#" className='btn rounded-pill mb-4 card-button'>
                    <ChevronRightIcon className='text-light card-icon' />
                </a>
            </div>
        </>
    )
}

export default ExpertiseCard