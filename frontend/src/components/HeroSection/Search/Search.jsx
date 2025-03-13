import { assets } from "../../../assets/assets";
import DatePicker from "react-datepicker";
import "./Search.css";
import { useContext, useMemo } from "react";
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
    setFormatDateRange,
    locations,
  } = useContext(LocationContext);
  const navigate = useNavigate();

  const allLocations = locations.map((item) => item.location);

  const uniqueLocations = [...new Set(allLocations)];

  // const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   // Simulate async data fetch
  //   fetch("/api/locations")                                                        <----------------------------- I will need to do this when I have my backend
  //     .then(res => res.json())
  //     .then(data => setLocations(data));
  // }, []);

  // const uniqueLocations = [...new Set(locations.map(item => item.location))];

  const handleSelectHotel = (event) => {
    setSelectedHotel(event.target.value);
  };

  const handleSearchButton = () => {
    if (!selectedHotel || !checkInDate || !checkOutDate || !guests) {
      alert("Please fill in all fields.");
      return;
    }
    setFormatDateRange(formattedDateRange);
    navigate("/locations");
  };

  

  const formattedDateRange = useMemo(() => {
    if (!checkInDate || !checkOutDate) return "";
    const checkInMonth = checkInDate.toLocaleString("default", {
      month: "short",
    });
    const checkInDay = checkInDate.getDate();
    const checkOutMonth = checkOutDate.toLocaleString("default", {
      month: "short",
    });
    const checkOutDay = checkOutDate.getDate();

    if (checkInMonth === checkOutMonth) {
      return `${checkInMonth} ${checkInDay} - ${checkOutDay}`;
    } else {
      return `${checkInMonth} ${checkInDay} - ${checkOutDay} ${checkOutMonth}`;
    }
  }, [checkInDate, checkOutDate]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
          {uniqueLocations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className="item right_border inner">
        <p className="upper_p_tag">Check in</p>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          minDate={new Date()}
          maxDate={checkOutDate}
          // excludeDates={getExcludedDates()}
          placeholderText="Add dates"
          className="lower_p_tag date-picker"
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          popperClassName="custom-datepicker-popper"
          dayClassName={(date) => {
            const currentDate = new Date(date);
            currentDate.setHours(0, 0, 0, 0);
            return currentDate < today
              ? "react-datepicker_day--disabled-custom"
              : "";
          }}
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
          dayClassName={(date) => {
            if (!checkInDate) return "";
            const currentDate = new Date(date);
            currentDate.setHours(0, 0, 0, 0);
            const minCheckout = new Date(checkInDate);
            minCheckout.setHours(0, 0, 0, 0);
            return currentDate < minCheckout
              ? "react-datepicker_day--disabled-custom"
              : "";
          }}
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
