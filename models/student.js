const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
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
    photo: {
      data: Buffer,
      contentType: String,
    },
    class: {
      type: Number,
      require: true,
    },
    section: {
      type: String,
      trim: true,
    },
    roll_number: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      maxlength: 32,
      unique: true,
      lowercase: true,
    },
    father: {
      type: String,
      trim: true,
      maxlength: 32,
      lowercase: true,
    },
    mother: {
      type: String,
      trim: true,
      maxlength: 32,
      lowercase: true,
    },
    student_id: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    school: {
      type: ObjectId,
      ref: "School",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
