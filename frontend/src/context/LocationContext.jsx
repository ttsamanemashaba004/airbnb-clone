import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [locations, setLocations] = useState([]);

  const [selectedHotel, setSelectedHotel] = useState(
    localStorage.getItem("selectedHotel") || ""
  );
  const [checkInDate, setCheckInDate] = useState(
    localStorage.getItem("checkinDate") || ""
  );
  const [checkOutDate, setCheckOutDate] = useState(
    localStorage.getItem("checkoutDate") || ""
  );
  const [formatDateRange, setFormatDateRange] = useState(
    localStorage.getItem("dateRange") || ""
  );
  const [guests, setGuests] = useState(localStorage.getItem("guests") || "");
  const [hotelData, setHotelData] = useState(false);
  const [token, setToken] = useState('')
  const navigate = useNavigate();



  const getListingsData = async () => {
    try {

        const response = await axios.get(backendUrl + '/api/listing/list')
        if (response.data.success) {
            setLocations(response.data.listings.reverse())
        } else {
            toast.error(response.data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

useEffect(() => {
  getListingsData()
}, [])

  useEffect(() => {
    localStorage.setItem("selectedHotel", selectedHotel);
    localStorage.setItem("guests", guests);
    localStorage.setItem("dateRange", formatDateRange);
    localStorage.setItem("checkinDate", checkInDate);
    localStorage.setItem("checkoutDate", checkOutDate);
  }, [selectedHotel, guests, formatDateRange, checkInDate, checkOutDate]);

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        
    }
    
}, [token])

  const currency = "$";
  const weeklyDiscount = 28;
  const cleaningFee = 62;
  const serviceFee = 83;
  const tax = 29;

  const value = {
    locations,
    currency,
    selectedHotel,
    setSelectedHotel,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guests,
    setGuests,
    formatDateRange,
    setFormatDateRange,
    hotelData,
    setHotelData,
    weeklyDiscount,
    cleaningFee,
    serviceFee,
    tax, token, setToken, backendUrl, navigate
  };

  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
