import reservationModel from "../models/reservationsModel.js";
import userModel from "../models/userModel.js";


const placeReservation = async (req, res) => {
    try {
      // Extract needed data from the request body
      const {
        userId,        // or get from req.user._id if using auth middleware
        propertyId,
        checkInDate,
        checkOutDate,
        guests,
      } = req.body;
  
      // Construct the reservation object
      const reservationData = {
        userId,
        propertyId,
        checkInDate,
        checkOutDate,
        guests,
        createdAt: Date.now(),
        status: 'Confirmed',
      };
  
      // Save to DB
      const newReservation = new reservationModel(reservationData);
      await newReservation.save().populate('userId','name');
  
      // (Optional) If you want to clear or update user data
      // await userModel.findByIdAndUpdate(userId, { reservationData: reservationData });
  
      return res.json({
        success: true,
        message: 'Reservation Placed',
        reservation: newReservation,
      });
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: error.message });
    }
  };



// All Orders data for Admin Panel
const allReservations = async (req, res) => {
    try {
      // If you want to restrict to admin, do an admin check here
      // e.g., if (!req.user.isAdmin) { return res.json({ success: false, message: "Not admin" }); }
  
      const reservations = await reservationModel.find({}).populate('userId','name').populate("propertyId", "listing_title");
      return res.json({ success: true, reservations });
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: error.message });
    }
  };
  

// User Order Data For Forntend
const userReservations = async (req, res) => {
    try {
      // userId set by authUser
      const { userId } = req.body;
  
      const reservations = await reservationModel.find({ userId }).populate('userId','name').populate("propertyId", "listing_title");
  
      return res.json({
        success: true,
        reservations,
      });
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: error.message });
    }
  };

  // User Order Data remove
  const removeUserReservation = async (req, res) => {
    try {
      
      const { reservationId } = req.body;
  

      const deletedReservation = await reservationModel.findOneAndDelete({
        _id: reservationId,
      });
  
      if (!deletedReservation) {
        return res.json({
          success: false,
          message: "Reservation not found or already deleted.",
        });
      }
  
      return res.json({
        success: true,
        message: "Reservation deleted successfully.",
        reservation: deletedReservation,
      });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: error.message });
    }
  };
  

  
  



export {placeReservation, allReservations, userReservations, removeUserReservation}