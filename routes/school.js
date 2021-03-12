const express = require("express");
const router = express.Router();

const {
  create,
  schoolById,
  read,
  remove,
  update,
  list,
} = require("../controllers/school");

router.get("/school/", read);
router.post("/school/create", create);
router.delete("/school/:schoolId", remove);
router.put("/category/:schoolId", update);
router.get("/schools/", list);

//auth

router.param("schoolId", schoolById);

module.exports = router;
