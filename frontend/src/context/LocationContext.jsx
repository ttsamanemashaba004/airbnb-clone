import { createContext, useState, useEffect } from "react";
import { locations } from "../assets/assets";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [selectedHotel, setSelectedHotel] = useState(
    localStorage.getItem("selectedHotel") || ""
  );
  const [checkInDate, setCheckInDate] = useState(localStorage.getItem("checkinDate") || "");
  const [checkOutDate, setCheckOutDate] = useState(localStorage.getItem("checkoutDate") || "");
  const [formatDateRange, setFormatDateRange] = useState(localStorage.getItem("dateRange") || "");
  const [guests, setGuests] = useState(localStorage.getItem("guests") || "");
  const [hotelData, setHotelData] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedHotel", selectedHotel);
    localStorage.setItem("guests", guests);
    localStorage.setItem("dateRange", formatDateRange);
    localStorage.setItem("checkinDate", checkInDate)
    localStorage.setItem("checkoutDate", checkOutDate)
  }, [selectedHotel, guests, formatDateRange, checkInDate, checkOutDate]);

  const currency = "$";
  const weeklyDiscount = 28
  const cleaningFee = 62
  const serviceFee = 83
  const tax = 29

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
    setHotelData, weeklyDiscount, cleaningFee, serviceFee, tax
  };

  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
