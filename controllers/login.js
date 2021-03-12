const School = require("../models/school");
const Student = require("../models/student");
const Parent = require("../models/parent");


exports.studentlogin = (req, res) => {
  const { student_id, password, school } = req.body;
  Student.findOne({ student_id, password, school }).exec((err, student) => {
    if (err || !student) {
      console.log(school);
      return res.status(400).json({
        error: "User with that email does not exist. Please signup.",
      });
    }

    const { _id, name, gender } = student;
    console.log({ student });

    return res.json({ student: { _id, name, gender } });
  });
};

exports.parentlogin = (req, res) => {
  const { student_id, password, school } = req.body;
  Student.findOne({ student_id, password, school }).exec((err, student) => {
    if (err || !student) {
      console.log(school);
      return res.status(400).json({
        error: "User with that email does not exist. Please signup.",
      });
    }

    const { _id, name, gender } = student;
    console.log({ student });

    return res.json({ student: { _id, name, gender } });
  });
};
