const Teacher = require("../models/teacher");

exports.teacherById = (req, res, next, id) => {
  Teacher.findById(id).exec((err, teacher) => {
    if (err) {
      return res.status(400).json({
        error: "Teacher not found",
      });
    }

    req.teacher = teacher;
    next();
  });
};

exports.create = (req, res) => {
  const teacher = new Teacher(req.body);
  teacher.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  return res.json(req.teacher);
};

exports.remove = (req, res) => {
  let teacher = req.teacher;
  teacher.remove((err, deletedteacher) => {
    if (err) {
      return res.status(400).json({
        error,
      });
    }

    res.json({
      deletedteacher,
      message: "Teacher deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const teacher = req.teacher;
  teacher.name = req.body.name;
  teacher.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  Teacher.find().exec((err, find) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(find);
  });
};
