import { assets } from '../../../assets/assets'
import './ShopAirbnb.css'

const ShopAirbnb = () => {
  return (
    <div className="shopairbnb_container">
        <div className='left_side'>
            <h1>Shop Airbnb <br/> gift cards</h1>
            <button>Learn more</button>
        </div>
        <div className='right_side'>
            <img src={assets.giftcard} alt="" className='giftcard_image'/>
        </div>
    </div>
  )
}

export default ShopAirbnb