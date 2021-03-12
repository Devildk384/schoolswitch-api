const express = require("express");
const router = express.Router();

const {
  create,
  teacherById,
  read,
  remove,
  update,
  list,
} = require("../controllers/teacher");

router.get("/teacher/", read);
router.post("/teacher/create", create);
router.delete("/teacher/:teacherId", remove);
router.put("/teacher/:teacherId", update);
router.get("/teachers/", list);

router.param("teacherId", teacherById);

module.exports = router;
