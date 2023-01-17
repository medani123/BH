import Slider from 'react-slick'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import { useRef } from 'react'
import { useEffect } from 'react'
import { ButtonBase } from '@material-ui/core'
import FeatureCarouselCards from '../Energy__transition-components/FeatureCarouselCards'

const FeatureCarousel = () => {
  let settings_3 = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 822,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  }
  const sliderRef = useRef(null)
  useEffect(() => {
    console.log(sliderRef)
  }, [])
  return (
    <div>
      <div
        className='mx-lg-5 px-lg-5'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 10px',
          marginRight: '2rem',
          marginTop: '1rem',
        }}
      >
        <div>
          <div className='img__border ms-4 my-3'></div>
          <h2 style={{ marginLeft: '1.5rem', fontSize: '14px' }}>
            FEATURED STRATEGIC PARTNERSHIPS
          </h2>
        </div>
        <div style={{ display: 'flex' }}>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              borderRadius: 7,
              boxShadow: '0 1px 3px rgb(0 0 0 / 10%)',
              cursor: 'pointer',
            }}
            className='buttons'
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ArrowBackIos className='button__icon' />
          </ButtonBase>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
              boxShadow: '0 1px 3px rgb(0 0 0 / 10%)',
              cursor: 'pointer',
            }}
            className='buttons'
            onClick={() => sliderRef.current.slickNext()}
          >
            <ArrowForwardIos className='button__icon' />
          </ButtonBase>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          {...settings_3}
          dots
          dotsClass='slick-dots line-indicator'
          ref={sliderRef}
          slidesToShow={4}
          slidesToScroll={4}
          customPaging={(i) => (
            <div
              style={{
                position: 'absolute',
                width: '100%',
                top: '-10px',
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          <FeatureCarouselCards
            img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/partner/public/2020-11/FCHEA.webp?itok=m9VdDWO0'
            title='Hydrogen Council'
          />
          <FeatureCarouselCards
            img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/partner/public/2020-11/CDP.webp?itok=fxkaj9eX'
            title={`Fuel Cells & Hydrogen Energy    Association`}
          />
          <FeatureCarouselCards
            img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/partner/public/2020-11/Global%20CCS%20Institute.jpg?itok=jHL4nPQJ'
            title='Global CCS Institute'
          />
          <FeatureCarouselCards
            img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/partner/public/2020-11/CDP.webp?itok=fxkaj9eX'
            title='Carbon Disclosure Project'
          />
          <FeatureCarouselCards
            img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/partner/public/2020-11/Global%20CCS%20Institute.jpg?itok=jHL4nPQJ'
            title='Stanford Natural Gas Initiative'
          />
          <FeatureCarouselCards
            img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/partner/public/2020-11/CDP.webp?itok=fxkaj9eX'
            title='Fuel Cells & Hydrogen Energy Association'
          />
          <FeatureCarouselCards
            img='https://www.bakerhughes.com/sites/bakerhughes/files/styles/partner/public/2020-11/FCHEA.webp?itok=m9VdDWO0'
            title='Fuel Cells & Hydrogen Energy Association'
          />
        </Slider>
      </div>
    </div>
  )
}

export default FeatureCarousel
