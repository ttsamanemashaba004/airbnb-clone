import React from 'react'

const Button = ({text1,width}) => {
  return (
    <button className={`h-[56px] rounded-[8px] py-[16px] px-[24px] bg-white border-1-[#E5E7EB] max-w-[${width}]  font-500 leading-[24px] text-[#374151] ml-[80px] `}>
        {text1}
    </button>
  )
}

export default Button