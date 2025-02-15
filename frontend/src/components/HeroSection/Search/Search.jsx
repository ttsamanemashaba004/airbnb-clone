import { assets } from "../../../assets/assets";
import "./Search.css";

const Search = () => {
  return (
    <div className="search_container">
      <div className="item right_border outer outer1">
        <p className="upper_p_tag">Hotels</p>
        <select className="lower_p_tag" name="options">
          <option value="option1">Select a Hotel</option>
          <option value="option2">Joburg</option>
          <option value="option3">Pretoria</option>
          <option value="option4">Sandton</option>
        </select>
      </div>
      <div className="item right_border inner">
        <p className="upper_p_tag">Check in</p>
        <p className="lower_p_tag">Add dates</p>
      </div>
      <div className="item right_border inner">
        <p className="upper_p_tag">Check out</p>
        <p className="lower_p_tag">Add dates</p>
      </div>
      <div className="item_end outer outer2">
        <div className="item">
          <p className="upper_p_tag">Guests</p>
          <p className="lower_p_tag">Add guests</p>
        </div>
        <div className="search_button">
          <img className="search_icon" src={assets.search} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
