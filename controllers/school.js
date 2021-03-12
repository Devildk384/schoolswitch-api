const School = require("../models/school");

exports.schoolById = (req, res, next, id) => {
  School.findById(id).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "School not found",
      });
    }

    req.category = category;
    next();
  });
};

exports.create = (req, res) => {
  const school = new School(req.body);

  school.school_id = req.body.school_id;
  school.school_id = `ss002`;

  school.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  return res.json(req.school);
};

exports.remove = (req, res) => {
  let school = req.school;
  school.remove((err, deletedSchool) => {
    if (err) {
      return res.status(400).json({
        error,
      });
    }

    res.json({
      deletedSchool,
      message: "School deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const school = req.school;
  school.name = req.body.name;
  school.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  School.find().exec((err, find) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(find);
  });
};
