import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import axios from "axios";
import { assets } from "../assets/assets";
import "./CreateListing.css";

const CreateListing = ({ token }) => {
  const [allAmenities] = useState([
    "Garden view",
    "WiFi",
    "Free washer - in building",
    "Central air conditioning",
    "Refrigerator",
    "Kitchen",
    "Pets allowed",
    "Dryer",
    "Security cameras on property",
    "Bicycles",
  ]);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);

  const [listing_title, setListing] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [host, setHost] = useState("");
  const [description, setDescription] = useState("");
  const [enhancedCleaning, setEnhancedCleaning] = useState(false);
  const [selfCheckin, setSelfCheckin] = useState(false);
  // const [amenities, setAmenities] = useState([]);
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [guests, setGuests] = useState("");
  const [bedrooms, setBed] = useState("");
  const [bathrooms, setBath] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("listing_title", listing_title);
      formData.append("location", location);
      formData.append("country", country);
      formData.append("host", host);
      formData.append("description", description);
      formData.append("enhanced_cleaning", enhancedCleaning);
      formData.append("self_checkin", selfCheckin);
      formData.append("amenities", JSON.stringify(selectedAmenities));
      formData.append("price", price);
      formData.append("type", type);
      formData.append("guests", guests);
      formData.append("bedrooms", bedrooms);
      formData.append("bathrooms", bathrooms);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      image5 && formData.append("image5", image5);
      image6 && formData.append("image6", image6);

      const response = await axios.post(
        backendUrl + "/api/listing/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset all text fields
        setListing("");
        setLocation("");
        setCountry("");
        setHost("");
        setDescription("");
        setPrice("");
        setType("");
        setGuests("");
        setBed("");
        setBath("");

        // Reset booleans
        setEnhancedCleaning(false);
        setSelfCheckin(false);

        // Reset arrays
        setSelectedAmenities([]);

        // Reset images
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // The user's current typed value
  const [amenityInput, setAmenityInput] = useState("");

  // The user's selected (added) amenities
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Add an amenity if it exists in allAmenities and isn’t already selected
  const handleAddAmenity = () => {
    if (
      amenityInput &&
      allAmenities.includes(amenityInput) &&
      !selectedAmenities.includes(amenityInput)
    ) {
      setSelectedAmenities((prev) => [...prev, amenityInput]);
      setAmenityInput("");
    }
  };

  const handleRemoveAmenity = (amenityToRemove) => {
    setSelectedAmenities((prev) =>
      prev.filter((amenity) => amenity !== amenityToRemove)
    );
  };

  const clearFields = () => {
    // Reset all text fields
    setListing("");
    setLocation("");
    setCountry("");
    setHost("");
    setDescription("");
    setPrice("");
    setType("");
    setGuests("");
    setBed("");
    setBath("");

    // Reset booleans
    setEnhancedCleaning(false);
    setSelfCheckin(false);

    // Reset arrays
    setSelectedAmenities([]);

    // Reset images
    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
    setImage5(false);
    setImage6(false);
  };

  return (
    <div className="create-listing-container">
      <form onSubmit={onSubmitHandler} className="create-listing-form">
        <p className="form-header1">Create Listing</p>
        <div className="create-listing-form-details">
          {/* left */}
          <div className="form-details">
            <div className="form-listing-inputs">
              <p className="form-listing-inputs_p">Listing Name</p>
              <input
                onChange={(e) => setListing(e.target.value)}
                value={listing_title}
                type="text"
                placeholder="Type here"
                required
              />
            </div>
            <div className="location_country_host">
              <div className="form-listing-inputs ">
                <p className="form-listing-inputs_p">Location</p>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                >
                  <option value="">-- Select Location --</option>
                  <option value="France">France</option>
                  <option value="Bordeaux">Bordeaux</option>
                  <option value="Los Angeles">Los Angeles</option>
                </select>
              </div>
              <div className="form-listing-inputs ">
                <p className="form-listing-inputs_p">Country</p>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                >
                  <option value="">-- Select Country --</option>
                  <option value="France">France</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                </select>
              </div>
              <div className="form-listing-inputs ">
                <p className="form-listing-inputs_p">Host</p>
                <input
                  onChange={(e) => setHost(e.target.value)}
                  value={host}
                  type="text"
                  placeholder="Type here"
                  required
                  className=""
                />
              </div>
            </div>
            <div className="form-listing-inputs">
              <p className="form-listing-inputs_p">Product description</p>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                placeholder="Write content here"
                required
              />
            </div>
            <div className="check-box">
              <div className="check">
                <input
                  onChange={() => setEnhancedCleaning((prev) => !prev)}
                  checked={enhancedCleaning}
                  className="check-label"
                  type="checkbox"
                  id="enhanced_cleaning"
                />
                <label htmlFor="enhanced_cleaning" className="check-label">
                  Enhanced Cleaning
                </label>
              </div>
              <div className="check">
                <input
                  onChange={() => setSelfCheckin((prev) => !prev)}
                  checked={selfCheckin}
                  className="check-label"
                  type="checkbox"
                  id="self_checkin"
                />
                <label className="check-label" htmlFor="self_checkin">
                  Self Check-in
                </label>
              </div>
            </div>
            {/* Amenities */}
            <div className="form-listing-input-amenities">
              <h3 className="form-listing-inputs_p">Amenities</h3>
              <div className="amenities-input">
                {/* The text input with suggestions */}
                <input
                  type="text"
                  list="amenitiesList" // tie this input to the <datalist>
                  value={amenityInput}
                  onChange={(e) => setAmenityInput(e.target.value)}
                  placeholder="Search or type an amenity"
                  className="amenities-input"
                />
                <datalist id="amenitiesList">
                  {allAmenities.map((amenity) => (
                    <option key={amenity} value={amenity} />
                  ))}
                </datalist>

                <button
                  onClick={handleAddAmenity}
                  className="amenities-input-button"
                  type="button"
                >
                  Add
                </button>
              </div>
              {/* Display the selected amenities */}
              {selectedAmenities.map((amenity, index) => (
                <div key={index} className="amenities_selected">
                  {amenity}
                  <button
                    type="button"
                    onClick={() => handleRemoveAmenity(amenity)}
                    className="remove-button"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="form-details">
            {/* top */}
            <div className="form-listing-inputs1 top">
              <div className="small-box rooms">
                <p className="form-listing-inputs_p">Price</p>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="number"
                  placeholder="1"
                  min={1}
                  required
                  className="right-inputs"
                />
              </div>
              <div className="small-box type">
                <p className="form-listing-inputs_p">Type</p>
                <select onChange={(e) => setType(e.target.value)} value={type}>
                  <option value="">-- Select Type --</option>
                  <option value="Entire Unit">Entire Unit</option>
                  <option value="Whole Villa"> Whole Villa</option>
                  <option value="Room">Room</option>
                </select>
              </div>
            </div>
            {/* middle */}
            <div className="form-listing-inputs1 top">
              <div className="small-box rooms">
                <p className="form-listing-inputs_p">Guest</p>
                <input
                  onChange={(e) => setGuests(e.target.value)}
                  value={guests}
                  type="number"
                  placeholder="1"
                  min={1}
                  required
                  className="right-inputs"
                />
              </div>
              <div className="small-box rooms">
                <p className="form-listing-inputs_p">Bathrooms</p>
                <input
                  onChange={(e) => setBath(e.target.value)}
                  value={bathrooms}
                  type="number"
                  placeholder="1"
                  min={1}
                  required
                  className="right-inputs"
                />
              </div>
              <div className="small-box rooms">
                <p className="form-listing-inputs_p">Bedrooms</p>
                <input
                  onChange={(e) => setBed(e.target.value)}
                  value={bedrooms}
                  type="number"
                  placeholder="1"
                  min={1}
                  required
                  className="right-inputs"
                />
              </div>
            </div>

            {/* Image */}
            <div className="form-listing-inputs">
              <p className="form-listing-inputs_p">Upload Image</p>
              <div className="image-grid">
                <label className="label" htmlFor="image1">
                  <img
                    className="grid-img"
                    src={
                      !image1 ? assets.upload_area : URL.createObjectURL(image1)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage1(e.target.files[0])}
                    type="file"
                    id="image1"
                    hidden
                  />
                </label>
                <label className="label" htmlFor="image2">
                  <img
                    className="grid-img"
                    src={
                      !image2 ? assets.upload_area : URL.createObjectURL(image2)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage2(e.target.files[0])}
                    type="file"
                    id="image2"
                    hidden
                  />
                </label>
                <label className="label" htmlFor="image3">
                  <img
                    className="grid-img"
                    src={
                      !image3 ? assets.upload_area : URL.createObjectURL(image3)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage3(e.target.files[0])}
                    type="file"
                    id="image3"
                    hidden
                  />
                </label>
                <label className="label" htmlFor="image4">
                  <img
                    className="grid-img"
                    src={
                      !image4 ? assets.upload_area : URL.createObjectURL(image4)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage4(e.target.files[0])}
                    type="file"
                    id="image4"
                    hidden
                  />
                </label>
                <label className="label" htmlFor="image5">
                  <img
                    className="grid-img"
                    src={
                      !image5 ? assets.upload_area : URL.createObjectURL(image5)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage5(e.target.files[0])}
                    type="file"
                    id="image5"
                    hidden
                  />
                </label>
                <label className="label" htmlFor="image6">
                  <img
                    className="grid-img"
                    src={
                      !image6 ? assets.upload_area : URL.createObjectURL(image6)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage6(e.target.files[0])}
                    type="file"
                    id="image6"
                    hidden
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="add_cancel_button">
          <button type="submit" className="blue">
            Create
          </button>
          <button type="button" className="red" onClick={clearFields}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
