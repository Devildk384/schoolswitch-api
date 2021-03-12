const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const parentSchema = new mongoose.Schema(
  {
    father: [
      {
        name: { type: String, trim: true, required: true },
        gender: {
          type: String,
          trim: true,
          enum: ["male", "female"],
        },
        date_of_birth: {
          type: String,
          trim: true,
          required: true,
        },
        email: {
          type: String,
          trim: true,
          maxlength: 32,
          unique: true,
          lowercase: true,
        },
        photo: {
          data: Buffer,
          contentType: String,
        },
        occupation: {
          type: String,
          trim: true,
          required: true,
        },
      },
    ],

    mother: [
      {
        name: { type: String, trim: true, required: true },
        gender: {
          type: String,
          trim: true,
          enum: ["male", "female"],
        },
        date_of_birth: {
          type: String,
          trim: true,
          required: true,
        },
        email: {
          type: String,
          trim: true,
          maxlength: 32,
          unique: true,
          lowercase: true,
        },
        photo: {
          data: Buffer,
          contentType: String,
        },
        occupation: {
          type: String,
          trim: true,
          required: true,
        },
      },
    ],

    address: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    parent_id: {
      type: String,
      trim: true,
      required: true,
    },
    child: [
      {
        student: {
          type: ObjectId,
          ref: "Student",
        },
      },
    ],
    school: {
      type: ObjectId,
      ref: "School",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Parent", parentSchema);
