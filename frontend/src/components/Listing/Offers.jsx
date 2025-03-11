import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Offers.css";
import { LocationContext } from "../../context/LocationContext";

const Offers = () => {
  const { hotelData } = useContext(LocationContext);
  return (
    <div className="offers-container">
      <p className="title">What this place offers</p>
      <div className="columns">
        <div className="column">
          <div className="airbnb-data-detail">
            <img src={assets.gardenview} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes("Garden view")
                  ? "none"
                  : "line-through",
              }}
            >
              Garden view
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.wifi} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes("Wifi")
                  ? "none"
                  : "line-through",
              }}
            >
              Wifi
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.free_washer} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes(
                  "Free washer - in building"
                )
                  ? "none"
                  : "line-through",
              }}
            >
              Free washer - in building
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.airCondition} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes(
                  "Central air conditioning"
                )
                  ? "none"
                  : "line-through",
              }}
            >
              Central air conditioning
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.fridge} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes("Refrigerator")
                  ? "none"
                  : "line-through",
              }}
            >
              Refrigerator
            </span>
          </div>
        </div>
        <div className="column">
          <div className="airbnb-data-detail">
            <img src={assets.kitchen} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes("Kitchen")
                  ? "none"
                  : "line-through",
              }}
            >
              Kitchen
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.pet} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes("Pets allowed")
                  ? "none"
                  : "line-through",
              }}
            >
              Pets allowed
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.dryer} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes("Dryer")
                  ? "none"
                  : "line-through",
              }}
            >
              Dryer
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.security} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes(
                  "Security cameras on property"
                )
                  ? "none"
                  : "line-through",
              }}
            >
              Security cameras on property
            </span>
          </div>
          <div className="airbnb-data-detail">
            <img src={assets.bicycle} alt="" />
            <span
              style={{
                textDecoration: hotelData?.amenities?.includes("Bicycles")
                  ? "none"
                  : "line-through",
              }}
            >
              Bicycles
            </span>
          </div>
        </div>
      </div>
      <div className="offer-button"></div>
    </div>
  );
};

export default Offers;
