import React from 'react'
import Search from './Search'
import HeroNavbar from './HeroNavbar'
import BigCard from './BigCard'
import Rectangle from './Rectangle'

const Hero = () => {
  return (
    <div className='h-[977px] pt-[16px] pb-[96px] gap-[24px] flex flex-col items-center bg-black text-white px-4 sm:px-[10] md:px-[16] lg:px-20'>
      <HeroNavbar />
      <Search />
      <BigCard />
      <Rectangle />
    </div>
  )
}

export default Hero