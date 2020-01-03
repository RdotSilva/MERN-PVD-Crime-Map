const express = require("express");
const { register, login, getLoggedInUser } = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.get("/me", getLoggedInUser);
router.post("/register", register);
router.post("/login", login);
// TODO: Fix protect
// router.get("/me", protect, getLoggedInUser);

module.exports = router;
