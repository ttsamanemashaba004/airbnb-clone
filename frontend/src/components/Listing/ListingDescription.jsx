import { useContext } from "react"
import "./ListingDescription.css"
import { LocationContext } from "../../context/LocationContext"
import { assets } from "../../assets/assets"

const ListingDescription = () => {
    const { hotelData } = useContext(LocationContext)
  return (
    <div className="lisitng_description_container">
        <span>{hotelData.description}<br/>...</span>
        <div className="listing_description_icon_text">
            <span className="show_more">Show more</span>
            <img src={assets.right_des} alt="" />
        </div>
    </div>
  )
}

export default ListingDescription