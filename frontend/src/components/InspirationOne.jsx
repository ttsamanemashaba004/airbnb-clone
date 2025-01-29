import React from 'react'
import CityCard from './CityCard'
import { assets } from '../assets/assets'

const InspirationOne = () => {
  return (
    <div className='flex flex-col gap-[48px]'>
        <p className='w-full h-[44px] font-500 text-[36px] leading-[44px]'>Inspiration for your next trip</p>
        {/* City cards */}
        <div className=' gap-[24px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 '>
            <CityCard image={assets.sandton}  text1={"Sandton City"} distance={'53'}/>
            <CityCard image={assets.joburg}  text1={"Joburg City"} distance={'103'}/>
            <CityCard image={assets.woodmead}  text1={"Woodmead"} distance={'30'}/>
            <CityCard image={assets.hyde}  text1={"Hyde Park"} distance={'34'}/>
            <CityCard image={assets.joburg}  text1={"Pretoria City"} distance={'34'}/>

        </div>
    </div>
  )
}

export default InspirationOne


 
