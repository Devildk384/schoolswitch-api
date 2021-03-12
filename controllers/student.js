const Student = require("../models/student");

exports.studentById = (req, res, next, id) => {
  Student.findById(id).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Student not found",
      });
    }

    req.category = category;
    next();
  });
};

exports.create = (req, res) => {
  const student = new Student(req.body);
  student.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  return res.json(req.student);
};

exports.remove = (req, res) => {
  let student = req.student;
  student.remove((err, deletedstudent) => {
    if (err) {
      return res.status(400).json({
        error,
      });
    }

    res.json({
      deletedstudent,
      message: "Student deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const student = req.student;
  student.name = req.body.name;
  student.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  Student.find().exec((err, find) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(find);
  });
};
