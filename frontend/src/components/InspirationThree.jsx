import React from 'react'
import { assets } from '../assets/assets'

const InspirationThree = () => {
  return (
    <div className='flex w-full h-[320px] gap-[48px] items-center justify-between px-4 sm:px-[10] md:px-[16] lg:px-20'>
        {/* Left side */}
        <div className='  max-w-[377.78px] flex flex-col gap-[24px]'>
            <p className='h-[112px] font-500 text-[48px] leading-[56px] max-w-[377.78px]'>Shop Airbnb <br />gift cards</p>
            <button className='max-w-[135px] h-[56px] rounded-[8px] py-[16px] px-[24px] bg-black text-white'>Learn more</button>
        </div>
        {/* gift card */}
        <img className='max-w-[852.22px] h-[320px]' src={assets.giftcard} alt="" />
    </div>
  )
}

export default InspirationThree