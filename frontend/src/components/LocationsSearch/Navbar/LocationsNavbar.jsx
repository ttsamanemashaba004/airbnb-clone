import Filters from './Filters/Filters'
import LocationsAirbnbNav from './LocationsAirbnbNav/LocationsAirbnbNav'
import './LocationsNavbar.css'

const LocationsNavbar = () => {
  return (
    <div className='locations_navbar_container'>
        <LocationsAirbnbNav />
        <Filters />
    </div>
  )
}

export default LocationsNavbar