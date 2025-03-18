import { assets } from '../../assets/assets'
import './AirbnbFooter.css'

const AirbnbFooter = () => {
  return (
    <div className='footer_container'>
        <div className='footer_columns'>
            <div className='column'>
                <p className='heading'>Support</p>
                <p className='text'>Help Center</p>
                <p className='text'>Safety information</p>
                <p className='text'>Cancellation options</p>
                <p className='text'>Our COVID-19 Response</p>
                <p className='text'>Supporting people with disabilities</p>
                <p className='text'>Report a neighborhoood concern</p>
            </div>
            <div className='column'>
                <p className='heading'>Community</p>
                <p className='text'>Airbnb.org: disaster relief housing</p>
                <p className='text'>Support: Afghan refugees</p>
                <p className='text'>Celebrating diversity & belonging</p>
                <p className='text'>Combating discriminatino</p>
            </div>
            <div className='column'>
                <p className='heading'>Hosting</p>
                <p className='text'>Try hosting</p>
                <p className='text'>AirCover: protection for Hosts</p>
                <p className='text'>Explore hosting resources</p>
                <p className='text'>Visit our community forum</p>
                <p className='text'>How to host responsibly</p>
        
            </div>
            <div className='column'>
                <p className='heading'>About</p>
                <p className='text'>Newsroom</p>
                <p className='text'>Learn about new features</p>
                <p className='text'>Letter from our founders</p>
                <p className='text'>Careers</p>
                <p className='text'>Investors</p>
                <p className='text'>Airbnb Luxe</p>
            </div>
        </div>
        <div className='footer_kicker'>
            <hr className='locations_hr'/>
            <div className='sub_footer'>
                <div className='sub_footer-left'>
                    <span>© 2025 Airbnb, Inc.</span>
                    <div className='ellipse'></div>
                    <span>Privacy</span>
                    <div className='ellipse'></div>
                    <span>Terms</span>
                    <div className='ellipse'></div>
                    <span>Sitemap</span>
                </div>
                <div className='sub_footer-right'>
                    <div className='language_currency'>
                        <div className='language'>
                            <img src={assets.globe2} alt=""  className='language_globe'/>
                            <span>English (US)</span>
                        </div>
                        <div className='currency'>
                            <img src={assets.dollar} alt="" className='language_globe'/>
                            <span>USD</span>
                        </div>
                    </div>
                    <div className='social_media'>
                        <div className='social'>
                            <img src={assets.facebook} alt="" />
                        </div>
                        <div className='social'>
                            <img src={assets.twitter} alt="" />
                        </div>
                        <div className='social'>
                            <img src={assets.insta} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AirbnbFooter