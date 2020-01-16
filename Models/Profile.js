const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  address: {
    type: String
  },
  location: {
    // GeoJSON Point. Use these coordinates to plot user location on map.
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Geocode and create location field
ProfileSchema.pre("save", async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // Do not store address in DB
  this.address = undefined;
  next();
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
