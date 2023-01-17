import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { KeyboardArrowRightIcon } from '../../constant/index'
import '../../container/ProductServices.css'

const CenterSection = (props) => {
  const [data, setData] = useState(null)
  const HandleClick = (id) => {
    setData(id)
    props.onData(data)
    console.log(data)
  }
  const {
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title8,
    title9,
    title10,
    title11,
  } = props
  return (
    <div>
      <div className='container'>
        <div className='row ms-3 '>
          <ul className='ProductItems ms-3'>
            <li id='button4' onClick={() => HandleClick('button4')}>
              <Link>
                {title1} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title2} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title3} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title4} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title5} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title6} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title7} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title8} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title9} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title10} <KeyboardArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link>
                {title11} <KeyboardArrowRightIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CenterSection
