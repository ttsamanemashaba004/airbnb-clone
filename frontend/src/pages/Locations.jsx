
import LocationsNavbar from '../components/LocationsSearch/Navbar/LocationsNavbar'
import LocationsList from '../components/LocationsSearch/LocationsList/LocationsList'

const Locations = () => {
  return (
    <div className='locations_container'>
      <LocationsNavbar />
      <LocationsList />
    </div>
  )
}

export default Locations