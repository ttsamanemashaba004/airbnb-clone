import { useContext } from "react";
import "./WhereYouSleep.css";
import { LocationContext } from "../../context/LocationContext";

const WhereYouSleep = () => {
  const { hotelData } = useContext(LocationContext);
  return (
    <div className="where_you_sleep_container">
      <p>Where you’ll sleep</p>
      <div className="thumbnail">
        {hotelData.image && hotelData.image.length > 0 && (
          <img
            src={hotelData.image[hotelData.image.length - 1]}
            alt=""
            className="thumb-image"
          />
        )}
        <div className="title-subtitle">
          <p>Bedroom</p>
          <p className="subtitle-thumb">1 queen bed</p>
        </div>
      </div>
    </div>
  );
};

export default WhereYouSleep;
