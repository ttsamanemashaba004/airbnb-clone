import React from 'react'

const CityCard = ({image ,text1, distance}) => {
  return (
    <div className='max-w-[324px]'>
        <img src={image} alt="" className='rounded-t-[8px] w-[324px] h-[200px]'/>
        <div className={`px-[16px] pt-[24px] pb-[96px] bg-[#CC2D4A] flex flex-col gap-[8px] h-[244px] rounded-b-[8px]`}>
            <p className='font-[500] text-[36px] leading-[44px] text-white'>{text1} <br/> Hotel</p>
            <p className='font-400 text-[18px] leading-[28px] text-white'>{distance} km away</p>
        </div>
    </div>
  )
}

export default CityCard