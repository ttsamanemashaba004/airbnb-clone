import mongoose from 'mongoose'

const listingSchema = new mongoose.Schema({
	listing_title:{type:String, required:true},
	location:{type:String, required:true},
    country:{type:String, required:true},
    host:{type:String, required:true},
    description:{type:String, required:true},
    enhanced_cleaning:{type: Boolean, required:true},
    self_checkin:{type: Boolean, required:true},
    amenities:{type:Array, required:true},
	price:{type:Number, required:true},
    type:{type:String, required:true},
    guests:{type:Number, required:true},
    bedrooms:{type:Number, required:true},
    bathrooms:{type:Number, required:true},
	image:{type:Array, required:true},
})


const listingModel = mongoose.models.listing || mongoose.model("listing", listingSchema)

export default listingModel