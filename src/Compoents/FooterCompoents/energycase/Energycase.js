import React from 'react'
import Energy from '../energy/Energy';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Energycase() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 p-0'>
                    <div className='energy__forward'>
                        <div>
                            <Energy
                                tittle="Energy Forward Stories"
                                text={<span>Discover the latest innovations & people shaping  <br /> <span className='energy_span'>our industry</span>   </span>}  
                            />
                        </div>
                        <button className='energy__btn'><ArrowForwardIosIcon className='btn_icon' /></button>
                    </div>
                </div>
                <div className='col-md-6 p-0'>
                    <div className='energy__case'>
                        <div>
                            <Energy
                                tittle="Case study library"
                                case="Solving the industry's toughest challenges"  
                            />
                        </div>
                        <button className='case__btn'><ArrowForwardIosIcon className='case_icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Energycase;

    