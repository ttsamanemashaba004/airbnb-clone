import { useContext, useState } from "react";
import "./BookingBox.css";
import { LocationContext } from "../../context/LocationContext";
import { assets } from "../../assets/assets";
import DatePicker from "react-datepicker";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

const BookingBox = () => {
  const {
    hotelData,
    currency,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guests,
    setGuests,
    weeklyDiscount,
    cleaningFee,
    serviceFee,
    tax,
    navigate,
    backendUrl,
    token,
  } = useContext(LocationContext);

  const onSubmithandler = async (event) => {
    event.preventDefault();

    // Check if user is logged in by verifying the token
    if (!token) {
      toast.error("Please log in to place a reservation.");
      navigate("/login"); // or open a login modal if you prefer
      return;
    }

    // Construct the reservation data payload
    const reservationData = {
      propertyId: hotelData._id,
      checkInDate,
      checkOutDate,
    };

    try {
      console.log("Sending reservationData:", reservationData);
      const response = await axios.post(
        backendUrl + "/api/reservation/place",
        reservationData,
        { headers: { token } }
      );
      toast.success("Reservation placed successfully!");
      navigate("/reservations");
    } catch (error) {
      console.error("Error placing reservation:", error);
      toast.error(
        "There was an error processing your reservation. Please try again."
      );
    }
  };

  const guestsArray = Array.from({ length: hotelData.guests }, (_, i) => i + 1);

  const handleSelectedGuest = (e) => {
    setGuests(Number(e.target.value));
  };

  const nights =
    checkInDate && checkOutDate
      ? differenceInCalendarDays(checkOutDate, checkInDate)
      : 0;

  const price_per_guest = hotelData.price * guests;
  const nights_total = price_per_guest * nights;
  const total_price =
    nights_total + cleaningFee + serviceFee + tax - weeklyDiscount;

  return (
    <form onSubmit={onSubmithandler} className="book_box_container">
      <div className="box_header">
        <div className="price">
          <span className="dollar_sign_price">
            {currency}
            {hotelData.price}
          </span>
          <span className="div">/</span>
          <span className="per_night">night</span>
        </div>
        <div className="right">
          <div className="icon_text">
            <img src={assets.star2} alt="" />
            <span className="text1">5.0</span>
          </div>
          <div className="ellipse"></div>
          <span className="text">7 reviews</span>
        </div>
      </div>
      <div className="box_details">
        <div className="box_details_row">
          <div className="box_details_row-checkin_out left4">
            <span className="box_details_row-checkin">CHECK-IN</span>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              dateFormat="MM/dd/yyyy"
              placeholderText={checkInDate}
              className="box_details_row-checkout_date"
              calendarClassName="myCustomCalendar"
              popperClassName="custom-datepicker-popper"
            />
          </div>
          <div className="box_details_row-checkin_out">
            <span className="box_details_row-checkout">CHECKOUT</span>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate || new Date()}
              dateFormat="MM/dd/yyyy"
              placeholderText={checkOutDate}
              className="box_details_row-checkout_date"
              calendarClassName="myCustomCalendar"
              popperClassName="custom-datepicker-popper"
            />
          </div>
        </div>
        <div className="box_details_guest">
          <p className="box_details_guest_text">GUESTS</p>
          <select
            value={guests}
            onChange={handleSelectedGuest}
            className="box_details_guest_input"
          >
            {guestsArray.map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="box_button">
        <button className="boxButton">Reserve</button>
      </div>
      <span className="box_text">{`You won't be charged yet`}</span>
      <div className="box_price_details">
        <div className="box_price_details_row">
          <span>
            {currency}
            {price_per_guest} x {nights}{" "}
            {`${nights === 1 ? "night" : "nights"}`}
          </span>
          <span>
            {currency}
            {nights_total}
          </span>
        </div>
        <div className="box_price_details_row">
          <span>Weekly discount</span>
          <span className="weekly_discount">
            -{currency}
            {weeklyDiscount}
          </span>
        </div>
        <div className="box_price_details_row">
          <span>Cleaning fee</span>
          <span>
            {currency}
            {cleaningFee}
          </span>
        </div>
        <div className="box_price_details_row">
          <span>Service fee</span>
          <span>
            {currency}
            {serviceFee}
          </span>
        </div>
        <div className="box_price_details_row">
          <span>Occupancy taxes and fees</span>
          <span>
            {currency}
            {tax}
          </span>
        </div>
      </div>
      <hr />
      <div className="box_total">
        <span>Total</span>
        <span>
          {currency}
          {total_price}
        </span>
      </div>
    </form>
  );
};

export default BookingBox;
