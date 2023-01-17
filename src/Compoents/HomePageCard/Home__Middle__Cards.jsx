import React, { useState } from 'react'
import './HomePageCard.css'
import HomeTabs from './HomeTabs'
import { Link } from 'react-router-dom'
const Home__Middle__Cards = () => {
  const [data, setdata] = useState('button1')

  const HandleClick = (id) => {
    setdata(id)
  }

  return (
    <div className=' py-5'>
      <div className='maintab-container'>
        <div className='container MainTab mt-5 gx-lg-0'>
          <div className='row '>
            <div className='col-lg-3 '>
              <div
                className={data === 'button1' ? 'home_mini2' : 'home_mini'}
                id='button1'
                onClick={() => HandleClick('button1')}
              >
                <Link className='homemibi'>
                  <div className='HomeMiniCard'>
                    <h6>Oilfield services & equipment</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === 'button2' ? 'home_mini2' : 'home_mini'}
                id='button2'
                onClick={() => HandleClick('button2')}
              >
                <Link className='homemibi'>
                  <div className='HomeMiniCard'>
                    <h6>Liquefied natural gas (LNG)</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === 'button3' ? 'home_mini2' : 'home_mini'}
                id='button3'
                onClick={() => HandleClick('button3')}
              >
                <Link className='homemibi'>
                  <div className='HomeMiniCard'>
                    <h6>Industrial technology</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === 'button4' ? 'home_mini2' : 'home_mini'}
                id='button4'
                onClick={() => HandleClick('button4')}
              >
                <Link className='homemibi'>
                  <div className='HomeMiniCard'>
                    <h6>Energy transition</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === 'button5' ? 'home_mini2' : 'home_mini'}
                id='button5'
                onClick={() => HandleClick('button5')}
              >
                <Link className='homemibi'>
                  <div className='HomeMiniCard'>
                    <h6>Industrial asset management</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === 'button6' ? 'home_mini2' : 'home_mini'}
                id='button6'
                onClick={() => HandleClick('button6')}
              >
                <Link className='homemibi'>
                  <div className='HomeMiniCard'>
                    <h6>Remote operations</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-lg-8 ms-lg-5 mt-3'>
              {data === 'button1' && (
                <HomeTabs
                  topText='Our oilfield technology and services help you operate efficiently and predictably, ensuring that projects are executed right the first time and assets consistently perform at peak productivity. Our portfolio is enriched by digitalization, artificial intelligence and automation capabilities that enable remote operations, reduce risk, and drive decarbonization efforts.'
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
              )}
              {data === 'button2' && (
                <HomeTabs
                  topText='As a leader in the LNG industry for the last 30 years, our broad suite of solutions provide greater efficiency and availability across LNG operations. From our best-in-class gas turbines to our power solutions, we provide critical technology for LNG projects.'
                  title='Featured'
                  img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/what%20we%20do_LNG%20card%201.webp?itok=SN4OtRpc'
                  SubTitle='SLNG solutions'
                  subText='Over thirty years of industry-leading solutions for long-term reliability, availability, and project success.'
                  text='Read More'
                  img2='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/what%20we%20do_ET%20image%202.webp?itok=reo18mjy'
                  subText1='The most competitive gas turbine in the 65+ MW power range.'
                  SubTitle2='LM9000 gas turbine'
                />
              )}
              {data === 'button3' && (
                <HomeTabs
                  topText='Our industrial technologies improve efficiency for heavy and process industries. Our power generation solutions in the 5-20MW range, as well as our compression capabilities and digital solutions help serve industries to deliver better performance.'
                  title='Featured'
                  img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/what%20we%20do_industrial%20tech%20image%201.webp?itok=qejJFcjt'
                  SubTitle='Industrial technology'
                  subText='Solutions to improve efficiency and uptime in processing and manufacturing industries..'
                  text='Read More'
                  img2='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/gas%20turbine%20detail.webp?itok=Gg6cs_T6'
                  subText1='Setting standards in efficiency, availability, reliability, and flexibility while minimizing costs of ownership.'
                  SubTitle2='
NovaLT gas turbines'
                />
              )}
              {data === 'button4' && (
                <HomeTabs
                  topText='Our energy technology solutions are helping energy and industrial companies achieve their ambitions on the path to net zero. We are delivering the most efficent solutions today and investing in the future decarbonization of the energy system.'
                  title='Featured'
                  img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/what%20we%20do_ET%20image%201.webp?itok=XSEw3fg1'
                  SubTitle='Energy transition'
                  subText='Our energy technology helps industry advance on the path to net-zero and a sustainable energy future.'
                  text='Read More'
                  img2='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/NNNova%20LT12%20approved%20external%20use%20ALE_5181.webp?itok=4mG0Q7TO'
                  subText1='Setting standards in efficiency, availability, reliability, and flexibility while minimizing costs of ownership.'
                  SubTitle2='Hydrogen technologies'
                />
              )}
              {data === 'button5' && (
                <HomeTabs
                  topText='Our solutions transform operations by bringing together the power of data, analytics and automation to achieve more with less impact. Our asset management capabilities improve reliability and reduce unplanned downtime.

'
                  title='Featured'
                  img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/refineries%20and%20petrochemical%20plants_iStock-943356040%20%2861%29.webp?itok=KYafTCwI'
                  SubTitle='
Asset management'
                  subText='Plant-wide solutions of condition monitoring and asset protection with global support services..'
                  text='Read More'
                  img2='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/refineries%20and%20petrochemical%20plants_iStock-943356040%20%2864%29.webp?itok=wcUL6CCj'
                  subText1='Predict assets at risk of failure to improve maintenance and planning.'
                  SubTitle2='Predictive asset maintenance'
                />
              )}
              {data === 'button6' && (
                <HomeTabs
                  topText='We deploy digital operations, monitoring and testing capabilities to securely serve critical industries around the world. Our customers benefit from better insights, improved safety, and lower operational costs with our wide range of remote operation solutions.'
                  title='Featured'
                  img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2022-11/system_1_workers_at_an_hmi_screen.webp?itok=olnGrAnm'
                  SubTitle='Remote operations'
                  subText='Deploying digital operations and monitoring capabilities to securely serve critical industries around the world..'
                  text='Read More'
                  img2='https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/20181025_BHGE_OKC_1604-RT.webp?itok=ojrlptr2'
                  subText1='Expertise and resources to connect your people, data, and machines to increase value and performance.'
                  SubTitle2='Advanced digital services'
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='subtab p-1'>
        <div className='container  my-5 mt-5'>
          <div className='row'>
            <div className='col-md-6 '>
              <div className='leadership__img'>
                <img
                  src='https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-09/09272019_aboutus_i3%402x.jpg?itok=-zPXDRLJ'
                  alt=''
                  className='img-fluid'
                />

                <div className='about__dash mb-3 mt-5'>
                  <div className='about__dash-line  me-3'></div>
                  <div className='text-white'>COMPANY LEADERSHIP</div>
                </div>
                <h3 className='text-white'>
                  <b>Management team</b>
                </h3>
                <p className='text-gray'>
                  Our executive management team supports the long-term <br />{' '}
                  interests of shareholders, employees, customers, suppliers,
                  and <br /> the communities where we do business.
                </p>

                <div className=' my-4'>
                  <button class='m-auto variable-button1 h6'>
                    <span>LEARN MORE</span>
                  </button>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='leadership__img'>
                <img
                  src='https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-09/09242019_aboutus_i4%402x.jpg?itok=zZNSIpD4'
                  alt=''
                  className='img-fluid'
                />

                <div className='about__dash mb-3 mt-5'>
                  <div className='about__dash-line  me-3'></div>
                  <div className='text-light'>COMPANY LEADERSHIP</div>
                </div>
                <h3 className='text-white'>
                  <b>Management teamBoard of directors</b>
                </h3>
                <p className='text-gray'>
                  Our board is active and engaged, and supports a culture of{' '}
                  <br /> open dialogue, collaboration, and rigorous
                  decision-making to <br /> create long-term stakeholder value.
                </p>

                <div className=' my-4'>
                  <button class='m-auto variable-button1 h6'>
                    <span>LEARN MORE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home__Middle__Cards
