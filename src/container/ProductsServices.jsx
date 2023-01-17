import React, { useState } from 'react'
import './ProductServices.css'
import { KeyboardArrowRightIcon } from '../constant/index'
import { CenterSection, ProductServiceSamllCard } from '../Compoents/index'
import { Link } from 'react-router-dom'
const ProductsServices = () => {
  const [currentButton, setCurrentButton] = useState(null)
  const [data, setData] = useState(null)

  const handleButtonClick = (id) => {
    setCurrentButton(id)
  }
  const handleData = (data) => {
    setData(data)
  }
  return (
    <section className=''>
      <div className='d-flex  Featture__mn_left'>
        <div className=' ProductLeftSection'>
          <ul className='Product__items mt-5'>
            <button
              id='button1'
              onClick={() => handleButtonClick('button1')}
              className='text-start '
            >
              <li>
                <Link to='#'>
                  Oilfield <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
            <button
              id='button2'
              className='text-start'
              onClick={() => handleButtonClick('button2')}
            >
              <li>
                <Link to='#' className='text-start'>
                  Turbomachinery &<br />
                  Process Solutions
                  <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
            <button
              className='text-start'
              id='button3'
              onClick={() => handleButtonClick('button3')}
            >
              <li>
                <Link>
                  Software & Analytics <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
            <button className='text-start'>
              <li>
                <Link to='#'>
                  Measurement,Testing <br /> & Controls
                  <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
            <button className='text-start'>
              <li>
                <Link to='#'>
                  Brands <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
          </ul>
        </div>
        <div className='Product__middle_Section'>
          {currentButton === 'button1' && (
            <CenterSection
              title1='On-Demand-Solutios'
              title2='OnShore Composite Pipe'
              title3='Evaltuation'
              title4='Pre-Commisssioning'
              title5='Drilling'
              title6='Completions'
              title7='Production'
              title8='Integrated Well Services'
              title9='Processing'
              title10='Subsea'
              title11='Pipeline inspection'
              onData={handleData}
            />
          )}

          {currentButton === 'button2' && (
            <CenterSection
              title1='Gas Turbines '
              title2='Steam Turbines '
              title3='Centrifugal & Axial Compressors'
              title4=' Reciprocating Compressors            '
              title5='Generators, Synchronous Condensers and Motors'
              title6='Gearboxes & Gear '
              title7='Expanders & Air Cooled Heat '
              title8='Remote & Digital '
              title9='Turbomachinery Services '
              title10='Centrifugal Pumps '
              title11=' Talent Development '
            />
          )}
        </div>
        <div className='Last__Product__Section '>
          <div className='row ms-5 mt-5 '></div>
          {data === 'button4' && <ProductServiceSamllCard />}
        </div>
      </div>
    </section>
  )
}

export default ProductsServices
