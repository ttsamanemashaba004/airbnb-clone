import React from 'react'
import { assets } from '../assets/assets'

const BigCard = () => {
  return (
    <div className='w-full  rounded-[8px] flex flex-col gap-[24px] justify-center relative items-center'>
      <img className=" h-[872px] rounded-[8px] flex flex-col gap-[24px] w-full  " src={assets.bigcard} alt="" />
      <p className='h-[56px] font-500 text-[48px] leading-[56px] text-white absolute bottom-[180px]'>Not sure where to go? Perfect.</p>
      <div className='w-[129px] h-[56px] rounded-[100px] py-[16px] px-[24px] bg-white border-[1px] border-[#E5E7EB] absolute bottom-[100px]'>
        <p className='max-w-[81px] w-full h-[24px] font-400 text-[16px] leading-[24px] text-[#671296]'>{`I'm flexible`}</p>
      </div>
    </div>
  )
}

export default BigCard


