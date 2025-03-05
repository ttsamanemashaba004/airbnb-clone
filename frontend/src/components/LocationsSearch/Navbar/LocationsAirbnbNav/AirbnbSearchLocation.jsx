import { assets } from '../../../../assets/assets'
import './AirbnbSearchLocation.css'

const AirbnbSearchLocation = () => {
  return (
    <div className='search_container_locations'>
        <div className='attribute div'><span>Bordeaux</span></div>
        <div className='attribute div gray'><span>Add dates</span></div>
        <div className='attribute gray'><span>Add guests</span></div>
        <img src={assets.search2} alt="" className='search2'/>
        
    </div>
  )
}

export default AirbnbSearchLocation