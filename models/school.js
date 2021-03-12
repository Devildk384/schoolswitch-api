const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      require: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    //status of school
    affiliation_number: {
      type: Number,
      require: true,
    },
    principal: {
      type: String,
      trim: true,
      require: true,
    },
    board: {
      type: String,
      trim: true,
      require: true,
    },
    phone_number: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
      lowercase: true,
    },
    website: {
      type: String,
      trim: true,
      maxlength: 45,
      unique: true,
      lowercase: true,
    },
    district: {
      type: String,
      trim: true,
      lowercase: true,
      require: true,
    },
    state: {
      type: String,
      trim: true,
      lowercase: true,
      require: true,
    },
    school_id: {
      type: String,
      trim: true,
      lowercase: true,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("School", schoolSchema);
