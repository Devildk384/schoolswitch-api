const Class = require("../models/class");

exports.classById = (req, res, next, id) => {
  Class.findById(id).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Student not found",
      });
    }

    req.class = data;
    next();
  });
};

exports.create = (req, res) => {
  const classes = new Class(req.body);
  classes.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  return res.json(req.Class);
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
  Class.find().exec((err, find) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(find);
  });
};
