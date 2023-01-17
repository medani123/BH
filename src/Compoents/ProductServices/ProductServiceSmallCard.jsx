import React from 'react'
import '../ProductServices/Product.css'
import { Link } from 'react-router-dom'

const ProductServiceSmallCard = () => {
  return (
    <div>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-12'>
            <div className='lastItems'>
              <div className='subItems'>
                <h6>On-Demand Solutions</h6>
                <p>Go beyond equipment sales </p>
                <h5>
                  EXPLORE <span>Icons</span>
                </h5>
              </div>

              <ul>
                <li>
                  <Link to='#'>Direct Sales</Link>
                </li>
                <li>
                  <Link to='#'>Channel Partners</Link>
                </li>
                <li>
                  <Link to='#'>Alternative Business Modals</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductServiceSmallCard
