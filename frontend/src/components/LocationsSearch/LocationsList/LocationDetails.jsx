import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import "./LocationDetail.css";

const LocationDetails = ({
  bath,
  title,
  location,
  guests,
  type,
  bed,
  amenities,
  price,
  image,
  currency,
  id,
}) => {
  return (
    <>
      <hr className="locations_hr" />
      <div className="location_detail_container">
        <div className="location_img">
          <Link to={`/listing/${id}`}>
            <img src={image} alt="" className="loc_img" />
          </Link>
        </div>

        <div className="location_content">
          <div className="location_header">
            <div className="location_title_subtitle">
              <p className="location_title">Entire home in {location}</p>
              <p className="location_subtitle">{title}</p>
            </div>
            <div className="location_heart">
              <img src={assets.heart} alt="" />
            </div>
          </div>
          <hr className="location_content_hr" />
          <div className="location_details">
            <div className="details_top">
              <span>{guests} guests</span>
              <div className="ellipse"></div>
              <span>{type}</span>
              <div className="ellipse"></div>
              <span>{bed} beds</span>
              <div className="ellipse"></div>
              <span>{bath} bath</span>
            </div>
            <div className="details_bottom">
              {amenities.length > 0 && <span>{amenities[0]}</span>}
              {amenities.length > 1 && <div className="ellipse"></div>}
              {amenities.length > 1 && <span>{amenities[1]}</span>}
              {amenities.length > 2 && <div className="ellipse"></div>}
              {amenities.length > 2 && <span>{amenities[2]}</span>}
            </div>
          </div>
          <hr className="location_content_hr" />
          <div className="location_detail_footer">
            <div className="review">
              <span className="number">5.0</span>
              <div className="star">
                <img src={assets.star} alt="" />
              </div>
              <span className="number_reviews">(318 reviews)</span>
            </div>
            <div className="price">
              <p>
                {currency}
                {price} /night
              </p>
              {/* <p className="para_bottom"> /night</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
