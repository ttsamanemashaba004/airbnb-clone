import express from "express";
import {
  placeReservation,
  userReservations,
  allReservations, removeUserReservation
} from "../controllers/reservationsController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const reservationRouter = express.Router();

reservationRouter.post("/place", authUser, placeReservation);

// Admin Features
reservationRouter.post("/list", adminAuth, allReservations);

// User Feature
reservationRouter.post("/userorders", authUser, userReservations);
reservationRouter.post("/remove", removeUserReservation);

export default reservationRouter;
