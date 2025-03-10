
import { useContext, useEffect, useState } from 'react'
import LocationDetails from './locationDetails'
import './LocationList.css'
import { LocationContext } from '../../../context/LocationContext'

const LocationsList = () => {
  const { locations, currency, selectedHotel } = useContext(LocationContext)
  const [hotels, setHotels] = useState([])

  useEffect(()=>{
    if(selectedHotel !== 'All Hotels'){
      const filterLocations = locations.filter(location => location.location === selectedHotel)
      setHotels(filterLocations)
    }else{
      setHotels(locations)
    }


    
  },[locations, selectedHotel])

  return (
    <div className='location_list_container'>
      <p className='locations_text'>{`${hotels.length} stays ${selectedHotel ==='All Hotels' ? 'available' : `in ${selectedHotel}`}`}</p>
      
      {/* Rendering Locations */}
      {
        hotels.map((item,index)=>(
          <LocationDetails key={index} id={item._id} currency={currency} bath={item.bathrooms} title={item.listing_title} location={item.location} guests={item.guests} type={item.type} bed={item.bedrooms} amenities={item.amenities} price={item.price} image={item.image[0]} />
        ))
      }
      
    </div>
  )
}

export default LocationsList