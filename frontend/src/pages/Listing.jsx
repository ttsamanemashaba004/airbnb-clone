import { useParams } from "react-router-dom";
import LocationsAirbnbNav from "../components/LocationsSearch/Navbar/LocationsAirbnbNav/LocationsAirbnbNav";
import "./Listing.css";
import { useContext, useEffect} from "react";
import { LocationContext } from "../context/LocationContext";
import ListingPage from "../components/Listing/ListingPage";

const Listing = () => {
  const { listingId } = useParams();
  const { locations, setHotelData } = useContext(LocationContext);
 

  const matchedHotel = locations.find((hotel) => hotel._id === listingId);

  useEffect(() => {
    if (matchedHotel) {
      setHotelData(matchedHotel);
    }
  }, [matchedHotel]);

  return (
    <div className="listing_container">
      <div className="locations_navbar_container">
        <LocationsAirbnbNav />
      </div>
      <ListingPage />
    </div>
  );
};

export default Listing;
