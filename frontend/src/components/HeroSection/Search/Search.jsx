import { assets } from "../../../assets/assets";
import DatePicker from "react-datepicker";
import "./Search.css";
import { useContext } from "react";
import { LocationContext } from "../../../context/LocationContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const {
    selectedHotel,
    setSelectedHotel,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guests,
    setGuests,
  } = useContext(LocationContext);
  const navigate = useNavigate();

  const handleSelectHotel = (event) => {
    setSelectedHotel(event.target.value);
  };

  const handleSearchButton = () => {
    if (!selectedHotel || !checkInDate || !checkOutDate || !guests) {
      alert("Please fill in all fields.");
      return;
    }
    navigate("/locations");
    
  }
  

  return (
    <div className="search_container">
      <div className="item right_border outer outer1">
        <p className="upper_p_tag">Hotels</p>
        <select
          className="lower_p_tag"
          name="options"
          onChange={handleSelectHotel}
        >
          <option value="option1">Select a Hotel</option>
          <option value="All Hotels">All Hotels</option>
          <option value="Bordeaux">Bordeaux</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Sandton">Sandton</option>
        </select>
      </div>
      <div className="item right_border inner">
        <p className="upper_p_tag">Check in</p>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          minDate={new Date()}
          maxDate={checkOutDate}
          placeholderText="Add dates"
          className="lower_p_tag date-picker"
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          popperClassName="custom-datepicker-popper"
        />
      </div>
      <div className="item right_border inner">
        <p className="upper_p_tag">Check out</p>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          minDate={checkInDate}
          placeholderText="Add dates"
          className="lower_p_tag date-picker"
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          popperClassName="custom-datepicker-popper"
        />
      </div>
      <div className="item_end outer outer2">
        <div className="item">
          <p className="upper_p_tag">Guests</p>
          <input
            type="number"
            value={guests}
            placeholder="Add guest"
            className="lower_p_tag"
            onChange={(e) => setGuests(e.target.value)}
            min="1"
          />
        </div>
        <div className="search_button" onClick={() => handleSearchButton()}>
          <img className="search_icon" src={assets.search} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
