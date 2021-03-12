const express = require("express");
const router = express.Router();

const {
  create,
  parentById,
  read,
  remove,
  update,
  list,
} = require("../controllers/parent");

router.get("/parent/", read);
router.post("/parent/create", create);
router.delete("/parent/:parentId", remove);
router.put("/parent/:parentId", update);
router.get("/parent/", list);

const { parentlogin } = require("../controllers/login");

//auth
router.post("/login", parentlogin);

router.param("parentId", parentById);

module.exports = router;
