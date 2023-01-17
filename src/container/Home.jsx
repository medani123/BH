/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { BekarHomeHead, HomeCard, HomeTabs } from '../Compoents'
import Home__Middle__Cards from '../Compoents/HomePageCard/Home__Middle__Cards'
import './Footer.css'
const Home = () => {
  return (
    <div>
      <BekarHomeHead />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md- border-end mt-3'>
            <HomeCard />
          </div>
          <div className='col-lg-4 col-md-4 border-end mt-3'>
            <HomeCard />
          </div>
          <div className='col-lg-4 col-md-4 border-end mt-3'>
            <HomeCard />
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row '>
          <div className='col-lg-1  mt-5'>
            <hr style={{ color: '#02a783', height: '4px' }} />
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='Home__What'>
            <h1>What we do</h1>
            <p>
              We develop and deploy the most advanced technologies to serve
              energy and industrial companies looking for more efficient, more
              reliable and cleaner solutions. Our diverse portfolio of
              technologies and solutions are transforming how industry works
              today and in the future.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 tasb'>
        <div className='mt-5'>
          <Home__Middle__Cards />
        </div>
        <div className='container-fluid'>
          <div className='container'>
            <div className='text-center '>
              <div className='hr mx-auto'></div>
              <h5 className='mt-4'>ENERGY FORWARD STORIES</h5>
              <h1 className='mt-3'>Discover the future of energy technology</h1>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='BottomSeection '>
                  <div className='d-flex p-3 ms-lg-3'>
                    <span>
                      <div className='hr mt-2'></div>
                    </span>
                    <span>
                      <h6 className='text-white ms-4'>
                        ENERGY FORWARD STORIES
                      </h6>
                    </span>
                  </div>
                  <h3 className='text-white p-3'>
                    Orchestrating supply chain resilience
                  </h3>
                  <p className='text-white p-3'>
                    Stormy global conditions have all but snapped established
                    supply chains. It’s time to reconfigure the drivers of
                    prosperity.
                  </p>
                  <div className=' p-3'>
                    <button class='m-auto variable-button2 '>
                      <span>LEARN MORE</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <HomeTabs
                  title='Featured'
                  img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/Subsea-Connect-Baker-Hughes-Landscape.webp?itok=au5r-EY9'
                  SubTitle='
                  Subsea connect'
                  subText='Helping our customers with production enhancement, maximizing recovery over the life-of-field, and reducing costs.'
                  text='Read More'
                  img2='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2022-10/execution_team.webp?itok=yeEmlszf'
                  subText1='Delivering solutions to maximize total asset value'
                  SubTitle2='
                  Maximizing Return on Efficiency'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='BottomSeection2 '>
                  <div className='d-flex p-3 ms-lg-3'>
                    <span>
                      <div className='hr mt-2'></div>
                    </span>
                    <span>
                      <h6 className='text-white ms-4'>PEOPLE & CULTURE</h6>
                    </span>
                  </div>
                  <h3 className='text-white p-3'>
                    Orchestrating supply chain resilience PEOPLE & CULTURE Meet
                    our inspiring new CFO
                  </h3>
                  <p className='text-white p-3'>
                    Nancy Buese is the new Baker Hughes CFO, bringing deep
                    industry experience and a passion for improving
                    preparedness, team diversity and transparency.
                  </p>
                  <div className=' p-3'>
                    <button class='m-auto variable-button2 '>
                      <span>LEARN MORE</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <HomeTabs
                  title='Featured'
                  img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/energy_forward_list_view/public/2022-11/nancy_buese_preferred.webp?itok=H-sGDjvc'
                  SubTitle='
                  Subsea connect'
                  subText='Helping our customers with production enhancement, maximizing recovery over the life-of-field, and reducing costs.'
                  text='Read More'
                  img2='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2022-10/execution_team.webp?itok=yeEmlszf'
                  subText1='Delivering solutions to maximize total asset value'
                  SubTitle2='
                  Maximizing Return on Efficiency'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
