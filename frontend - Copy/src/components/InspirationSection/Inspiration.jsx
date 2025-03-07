import AirbnbExperiences from './AirbnbExperience/AirbnbExperiences'
import './Inspiration.css'
import InspirationFooter from './InspirationFooter/InspirationFooter'
import InspirationForTrips from './InspirationSection/InspirationForTrips'
import Questions from './Questions/Questions'
import ShopAirbnb from './ShopAirbnb/ShopAirbnb'

const Inspiration = () => {
  return (
    <div className="inspiration_container">
      <InspirationForTrips />
      <AirbnbExperiences />
      <ShopAirbnb />
      <Questions />
      <InspirationFooter />
    </div>
  )
}

export default Inspiration