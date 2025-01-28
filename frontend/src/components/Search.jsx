import React from 'react'
import { assets } from '../assets/assets'

const Search = () => {
  return (
    <div className='max-w-[848px] w-full flex  gap-[4px] sm:gap-[16px] md:gap-[32px] h-[64px] rounded-[1000px] py-[8px] pl-[32px] pr-[8px] bg-white items-center'>
      {/* first section */}
      <div className='max-w-[193px] w-full h-[36px]'>
        <p className='h-[16px] font-600 text-[12px] leading-[16px] text-black pl-1'>Locations</p>
        <select className='h-[20px] font-400 text-[14px] leading-[20px] text-[#6B7280] outline-none md:pr-16'>
        <option value="Sandton">Select a Location</option>
          <option value="Sandton">Sandton</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Alberton">Alberton</option>
        </select>
      </div>
      <div className='h-[32px] border-[1px]  bg-[#6B7280] border-[#E5E7EB]' />

      {/* second section */}
      <div className='max-w-[114.3px] w-full h-[36px]'>
        <p className='h-[16px] font-600 text-[12px] leading-[16px] text-black pl-1'>Check in</p>
        <p className='h-[20px] font-400 text-[14px] leading-[20px] text-[#6B7280] outline-none'>Add dates</p>
      </div>
      <div className='h-[32px] border-[1px]  bg-[#6B7280] border-[#E5E7EB]' />

      {/* Third section */}
      <div className='max-w-[114.3px] w-full h-[36px]'>
        <p className='h-[16px] font-600 text-[12px] leading-[16px] text-black pl-1'>Check in</p>
        <p className='h-[20px] font-400 text-[14px] leading-[20px] text-[#6B7280] outline-none'>Add dates</p>
      </div>
      <div className='h-[32px] border-[1px]  bg-[#6B7280] border-[#E5E7EB]' />

      {/* fourth section */}
      <div className='max-w-[114.3px] w-full h-[36px]'>
        <p className='h-[16px] font-600 text-[12px] leading-[16px] text-black pl-1'>Guests</p>
        <p className='h-[20px] font-400 text-[14px] leading-[20px] text-[#6B7280] outline-none'>Add guests</p>
      </div>
      <img className="max-w-[48px] w-ful h-[48px]"src={assets.search_icon} alt="" />
    </div>
  )
}

export default Search




