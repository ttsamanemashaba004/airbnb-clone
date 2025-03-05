
import { useContext, useEffect, useState } from 'react'
import LocationDetails from './locationDetails'
import './LocationList.css'
import { LocationContext } from '../../../context/LocationContext'

const LocationsList = () => {
  const { locations, currency } = useContext(LocationContext)
  const [allLocations, setAllLocations] = useState([])

  useEffect(()=>{
    setAllLocations(locations)
  },[locations])

  return (
    <div className='location_list_container'>
      <p className='locations_text'>{locations.length} stays in Bordeaux</p>
      
      {/* Rendering Locations */}
      {
        allLocations.map((item,index)=>(
          <LocationDetails key={index} currency={currency} bath={item.bathrooms} title={item.listing_title} location={item.location} guests={item.guests} type={item.type} bed={item.bedrooms} amenities={item.amenities} price={item.price} image={item.image[0]} />
        ))
      }
      
    </div>
  )
}

export default LocationsList