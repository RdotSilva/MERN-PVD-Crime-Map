const express = require("express");
const { getLoggedInUserProfile } = require("../controllers/profile");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.get("/me", protect, getLoggedInUserProfile);

module.exports = router;
