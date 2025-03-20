import React from 'react'
import './LoginNav.css'
import { assets } from '../assets/assets'

const LoginNav = () => {
  const frontUrl = 'https://airbnb-clone-frontend-roan.vercel.app/';
  return (
    <div className='login-nav-container' onClick={() => window.location.href = frontUrl}>
        <img src={assets.logo} alt="" className='nav-img'/>
    </div>
  )
}

export default LoginNav