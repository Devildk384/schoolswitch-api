const express = require("express");
const router = express.Router();

const {
  create,
  studentById,
  read,
  remove,
  update,
  list,
} = require("../controllers/student");

router.get("/student/", read);
router.post("/student/create", create);
router.delete("/student/:studentId", remove);
router.put("/student/:studentId", update);
router.get("/students/", list);

const { studentlogin } = require("../controllers/login");

//auth
router.post("/login", studentlogin);

router.param("studentId", studentById);

module.exports = router;
