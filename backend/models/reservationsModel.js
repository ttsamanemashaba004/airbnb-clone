import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  userId: {type: String, ref:'user', required: true,},
  propertyId: {type: String, ref:'listing', required: true},
  checkInDate: {type: Date,required: true,},
  checkOutDate: {type: Date,required: true,},
});

const reservationModel =
  mongoose.models.reservation || mongoose.model("reservation", reservationSchema);

export default reservationModel;
