const express = require("express");
const router = express.Router();

const {
  create,
  classById,
  read,
  remove,
  update,
  list,
} = require("../controllers/class");

router.get("/class/", read);
router.post("/class/create", create);
router.delete("/class/:classId", remove);
router.put("/class/:classId", update);
router.get("/class/", list);

//auth

router.param("classId", classById);

module.exports = router;
