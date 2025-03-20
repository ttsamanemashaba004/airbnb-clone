import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import "./Listings.css";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Listings = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/listing/list");
      if (response.data.success) {
        setList(response.data.listings.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeListing = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/listing/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="listing_admin_container">
      <p className="listing_admin_title">My Hotel List</p>

      {list.map((item, index) => (
        <>
          <hr />
          <div key={index} className="listing_admin-listing">
            <img
              src={item.image[0]}
              alt=""
              className="listing_admin-listing-image"
            />
            <div className="listing_admin_content">
              <div className="listing_admin_header">
                <span className="title-admin">
                  {item.bedrooms} Room Bedroom
                </span>
                <span className="sub-admin">{item.listing_title}</span>
              </div>
              <hr className="div-adim" />
              <div className="listing_admin_details">
                <div className="details_top">
                  <span>{item.guests} guests</span>
                  <div className="ellipse"></div>
                  <span>{item.type}</span>
                  <div className="ellipse"></div>
                  <span>{item.bedrooms} beds</span>
                  <div className="ellipse"></div>
                  <span>{item.bathrooms} bath</span>
                </div>
                <div className="details_bottom">
                  {item.amenities.length > 0 && (
                    <span>{item.amenities[0]}</span>
                  )}
                  {item.amenities.length > 1 && <div className="ellipse"></div>}
                  {item.amenities.length > 1 && (
                    <span>{item.amenities[1]}</span>
                  )}
                  {item.amenities.length > 2 && <div className="ellipse"></div>}
                  {item.amenities.length > 2 && (
                    <span>{item.amenities[2]}</span>
                  )}
                </div>
              </div>
              <hr className="div-adim" />
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
                    {item.price} /night
                  </p>
                  {/* <p className="para_bottom"> /night</p> */}
                </div>
              </div>
            </div>
          </div>
          <button className="listing_admin_button blue">Update</button>
          <button className="listing_admin_button red">Delete</button>
        </>
      ))}
    </div>
  );
};

export default Listings;
