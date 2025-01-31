import React from 'react'
import Search from './Search'
import HeroNavbar from './HeroNavbar'
import BigCard from './BigCard'
import Rectangle from './Rectangle'

const Hero = () => {
  return (
    <div className="pt-4 pb-20 gap-6 flex flex-col items-center bg-black text-white px-4 sm:px-10 md:px-16 lg:px-20 flex-grow">
      <HeroNavbar />
      <Search />
      <BigCard />
    </div>
  )
}

export default Hero