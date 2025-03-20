import express from "express";
import {
  addListing,
  removeListings,
  singleListings,
  listListings,
} from "../controllers/listingController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const listingRouter = express.Router();

listingRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
    { name: "image5", maxCount: 1 },
    { name: "image6", maxCount: 1 }
  ]),
  addListing
);
listingRouter.post("/remove", adminAuth, removeListings);
listingRouter.post("/single", singleListings);
listingRouter.get("/list", listListings);

export default listingRouter;
