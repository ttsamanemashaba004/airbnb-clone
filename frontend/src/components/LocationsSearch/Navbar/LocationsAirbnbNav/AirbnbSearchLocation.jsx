import { useContext} from 'react'
import { assets } from '../../../../assets/assets'
import './AirbnbSearchLocation.css'
import { LocationContext } from '../../../../context/LocationContext'

const AirbnbSearchLocation = () => {

  const { selectedHotel, guests, } = useContext(LocationContext)
  
  return (
    <div className='search_container_locations'>
        <div className='attribute div'><span>{selectedHotel == null ? 'Where?' : selectedHotel}</span></div>
        <div className='attribute div gray'><span>Add dates</span></div>
        <div className={`attribute ${guests == 'Add guest' ? 'gray' : ''} `}><span>{guests > 1 ? `${guests} guests` : `${guests==1? `${guests} guest` : `${guests}`}`}</span></div>
        <img src={assets.search2} alt="" className='search2'/>
        
    </div>
  )
}

export default AirbnbSearchLocation