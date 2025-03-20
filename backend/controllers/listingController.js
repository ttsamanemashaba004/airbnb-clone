import { v2 as cloudinary } from "cloudinary";
import listingModel from "../models/listingModel.js";

// function for add product
const addListing = async (req, res) => {
  try {
    const {
      listing_title,
      location,
      country,
      host,
      description,
      price,
      guests,
      bedrooms,
      bathrooms,
      type,
      enhanced_cleaning,
      self_checkin,
      amenities,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const image5 = req.files.image5 && req.files.image5[0];
    const image6 = req.files.image6 && req.files.image6[0];

    const images = [image1, image2, image3, image4, image5, image6].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        }); // import cloudinary
        return result.secure_url;
      })
    );

    const listingData = {
      listing_title,
      location,
      country,
      host,
      price: Number(price),
      guests: Number(guests),
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      type,
      description,
      enhanced_cleaning: (enhanced_cleaning === "true" ? true : false),
      self_checkin: (self_checkin === "true" ? true : false),
      amenities: JSON.parse(amenities),
      image: imagesUrl,
    };

    const listing = new listingModel(listingData);
    await listing.save();

    res.json({ success: true, message: "Listing Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list products -------------------------------------------------------
const listListings = async (req, res) => {
  try {
    const listings = await listingModel.find({});
    res.json({ success: true, listings });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for remove product -------------------------------------------------------
const removeListings = async (req, res) => {
  try {
    await listingModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Listing removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info -------------------------------------------------------
const singleListings = async (req, res) => {
  try {
    const { listingId } = req.body;
    const listing = await listingModel.findById(listingId);
    res.json({ success: true, listing });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addListing, listListings, removeListings, singleListings };
