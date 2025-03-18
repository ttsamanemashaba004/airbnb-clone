import { assets } from '../../assets/assets'
import './AboutTheHost.css'

const AboutTheHost = () => {
  return (
    // About the host
    <div className='host-container'>

        {/* Header */}
        <div className='host-header'>

            {/* user */}
            <div className='host-user'>
                <img src={assets.avatar2} alt="" />
                <div className='host-user-title-subtitle1'>
                    <p className='host-title1'>Hosted by Ghazal</p>
                    <p className='host-subttile1'>Joined May 2021</p>
                </div>
            </div>

            {/* details */}
            <div className='host-details'>
                <div className='host-details-icon-text'>
                    <img src={assets.star_icon} alt="" />
                    <p>12 Reviews</p>
                </div>
                <div className='host-details-icon-text'>
                    <img src={assets.shield_icon} alt="" />
                    <p>Identity verified</p>
                </div>
                <div className='host-details-icon-text'>
                <img src={assets.badge_icon} alt="" />
                <p>Superhost</p>
                </div>
            </div>
        </div>

        {/* Description */}
        <div className='host-description'>
            <p className='host-description-header'>Ghazal is a Superhost</p>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            <p>Response rate: 100%</p>
            <p>Response time: within an hour</p>
        </div>

        {/* Button */}
        <button className='host-button'>Contact Host</button>

        {/* Icon + Text */}
        <div className='host-icon_text'>
            <img src={assets.frame_host1} alt="" />
            <p>To protect your payment, never transfer <br/> money or communicate outside of the<br/> Airbnb website or app.</p>
        </div>
    </div>
  )
}

export default AboutTheHost