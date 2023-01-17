import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../container/ProductServices.css'

const CenterCenterSection = (props) => {
  const [data, setData] = useState(null)
  const HandleClick = (id) => {
    setData(id)
    props.onData(data)
    console.log(data)
  }
  console.log()
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
            <li>
              <Link to='/AboutCompany'>{title1}</Link>
            </li>
            <li>
              <Link>{title2}</Link>
            </li>
            <li>
              <Link>{title3}</Link>
            </li>
            <li>
              <Link>{title4}</Link>
            </li>
            <li>
              <Link>{title5}</Link>
            </li>
            <li>
              <Link>{title6}</Link>
            </li>
            <li>
              <Link>{title7}</Link>
            </li>
            <li>
              <Link>{title8}</Link>
            </li>
            <li>
              <Link>{title9}</Link>
            </li>
            <li>
              <Link>{title10}</Link>
            </li>
            <li>
              <Link>{title11}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CenterCenterSection
