import { assets } from "../../../assets/assets";
import "./CityCard.css";

const CityCard = ({ image, title, distance, color }) => {
  return (
    <div className="card_container">
      <img className="city_image" src={image} alt="" />

      <div className="city_content" style={{ backgroundColor: color }}>
        <p className="city-card_title">{title}</p>
        <p className="city-card_distance">{distance} km away</p>
      </div>
    </div>
  );
};

export default CityCard;
