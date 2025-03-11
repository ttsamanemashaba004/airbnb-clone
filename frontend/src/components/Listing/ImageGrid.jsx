import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import { assets } from "../../assets/assets";

const ImageGrid = () => {
  const { hotelData } = useContext(LocationContext);
  return (
    <div className="listing_page">
      <div className="listing_header">
        <p className="title_header">{hotelData.listing_title}</p>
        <div className="listing_header_details">
          <div className="listing_header_details-left">
            <img src={assets.rating} alt="" />
            <div className="ellipse"></div>
            <span className="listing_header_details-left-reviews">
              7 reviews
            </span>
            <div className="ellipse"></div>
            <div className="listing_header_details-left-icon_text">
              <img src={assets.badge} alt="" />
              <span className="listing_header_details-left-superhost">
                Superhost
              </span>
            </div>
            <div className="ellipse"></div>
            <span className="listing_header_details-left-location">
              {hotelData.location}, {hotelData.country}
            </span>
          </div>
          <div className="listing_header_details-right">
            <div className="icon-text">
              <img src={assets.share} alt="" />
              <span className="listing_header_details-left-save">Share</span>
            </div>
            <div className="icon-text">
              <img src={assets.heart2} alt="" />
              <span className="listing_header_details-left-save">Save</span>
            </div>
          </div>
        </div>
      </div>
      <div className="listing_image_grid">
        <img src={hotelData.image?.[0]} alt="" className="main_image" />
        <div className="image_rows">
          <div className="row_one">
            <img
              src={hotelData.image?.[1] || hotelData.image?.[0]}
              alt=""
              className="_image_one"
            />
            <img
              src={hotelData.image?.[2] || hotelData.image?.[0]}
              alt=""
              className="_image_one two"
            />
          </div>
          <div className="row_two">
            <img
              src={hotelData.image?.[3] || hotelData.image?.[0]}
              alt=""
              className="_image_two"
            />
            <img
              src={hotelData.image?.[4] || hotelData.image?.[0]}
              alt=""
              className="_image_two four"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
