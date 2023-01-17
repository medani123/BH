import React from 'react'
import Card from './Card'

const ChallengeCards = () => {
  return (
    <div> <div className="container">
    <div className="our__framework-all ">
    <p>THE CHALLENGE</p>
    </div>
    <h1 className='text-center mb-5 '>Our view on how the industry <br /> advances towards net-zero</h1>
    <div className="row">
    <div className="col-md-4">
    <Card 
    img='	https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_3_2_768x512_/public/2020-11/3-column%20image%20card%201.jpg?h=2ce5e5b3&itok=R2mDEkJH'
    title={<span>Without major <br /> acceleration, the industry <br /> will not meet net-zero <br /> targets</span>}
    description='While technologies in use today can deliver a large amount of emission reductions, they are insufficient on their own to meet the Paris targets.  We need a dual strategy to implement efficiency measures today and invest in new energy solutions for the future.'
/>
    </div>

    <div className="col-md-4">
    <Card 
    img='	https://www.bakerhughes.com/sites/bakerhughes/files/styles/large_3_2_2x/public/2020-12/Energy-transition-capabilities-reliance%20on%20hydrocarbons-will-not-disappear.webp?h=64ce14d1&itok=kyFeHDO7'
    title={<span>Reliance on hydrocarbons <br /> will not disappear, so <br /> efficiency matters</span>}
    description='For at least the next 30 years, oil and gas will continue to play an important part of meeting global energy demand – even in the most aggressive of energy transition scenarios. Efficiency solutions are critical to reducing scope 1 and 2 emissions.'
/>
    </div>

    <div className="col-md-4">
    <Card 
    img='	https://www.bakerhughes.com/sites/bakerhughes/files/styles/large_3_2_2x/public/2020-12/Energy-transition-capabilities-no-path-without-partnership.webp?h=dd95d1c7&itok=SBJ6S0Lv'
    title={<span>There’s no path to net-zero<br /> without partnership and<br /> collaboration</span>}
    description='Our business was built on partnership and service. Today, we know this matters more than ever.  We believe it will take energy producers, technology and service providers, energy buyers, policymakers, and the community at large working closely together to achieve our collective ambitions.'
/>
    </div>
</div>
    </div></div>
  )
}

export default ChallengeCards