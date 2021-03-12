const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const teacherSchema = new mongoose.Schema(
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
    photo: {
      data: Buffer,
      contentType: String,
    },

    email: {
      type: String,
      trim: true,
      maxlength: 32,
      unique: true,
      lowercase: true,
    },
    teacher_id: {
      type: String,
      trim: true,
      required: true,
    },
    qualification: {
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
    classes: {
      type: ObjectId,
      ref: "Class",
    },

    school: {
      type: ObjectId,
      ref: "School",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
