const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const classSchema = new mongoose.Schema(
  {
    class: [
      {
        name: { type: Number, required: true },
        students: [
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
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Class", classSchema);
