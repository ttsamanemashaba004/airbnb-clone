import React from 'react'
import InspirationOne from './InspirationOne'
import InspirationTwo from './InspirationTwo'
import InspirationThree from './InspirationThree'
import InspirationFour from './InspirationFour'
import PreFooter from './PreFooter'

const Inspiration = () => {
  return (
    <div className='h-[3096px] flex flex-col gap-[96px] py-[96px] bg-white px-4 sm:px-[10] md:px-[16] lg:px-20'>
      <InspirationOne />
      <InspirationTwo />
      <InspirationThree />
      <InspirationFour />
      <PreFooter />
    </div>
  )
}

export default Inspiration