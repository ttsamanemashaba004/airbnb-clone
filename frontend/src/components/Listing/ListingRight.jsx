import { assets } from '../../assets/assets'
import BookingBox from './BookingBox'
import './ListingRight.css'

const ListingRight = () => {
  return (
    <div className='listing_right'>
      <BookingBox />
      <div className='listing_right_icon_text'>
        <img src={assets.flag} alt="" />
        <span>Report this listing</span>
      </div>
    </div>
  )
}

export default ListingRight