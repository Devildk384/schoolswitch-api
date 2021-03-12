const Parent = require("../models/parent");

exports.parentById = (req, res, next, id) => {
  Parent.findById(id).exec((err, category) => {
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
  const parent = new Parent(req.body);
  parent.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  return res.json(req.Parent);
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
  Parent.find().exec((err, find) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(find);
  });
};
