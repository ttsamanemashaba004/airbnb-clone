import { createContext, useState, useEffect } from "react";
import { locations } from "../assets/assets";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [selectedHotel, setSelectedHotel] = useState(
    localStorage.getItem("selectedHotel") || ""
  );
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [formatDateRange, setFormatDateRange] = useState(localStorage.getItem("dateRange") || "");
  const [guests, setGuests] = useState(localStorage.getItem("guests") || "");
  const [hotelData, setHotelData] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedHotel", selectedHotel);
    localStorage.setItem("guests", guests);
    localStorage.setItem("dateRange", formatDateRange);
  }, [selectedHotel, guests, formatDateRange]);

  const currency = "$";

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
    setHotelData
  };

  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
