import LocationsNavbar from '../components/LocationsSearch/Navbar/LocationsNavbar'
import LocationsList from '../components/LocationsSearch/LocationsList/LocationsList'
import './Locations.css'

const Locations = () => {
  return (
    <div className='locations_container'>
      <LocationsNavbar />
      <hr className='locations_hr'/>
      <LocationsList />
    </div>
  )
}

export default Locations