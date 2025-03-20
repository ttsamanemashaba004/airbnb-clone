import React from 'react'
import './LoginNav.css'
import { assets } from '../assets/assets'

const LoginNav = () => {
  return (
    <div className='login-nav-container'>
        <img src={assets.logo} alt="" className='nav-img'/>
    </div>
  )
}

export default LoginNav