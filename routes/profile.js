const express = require("express");
const {
  getLoggedInUserProfile,
  createdOrUpdateUserProfile
} = require("../controllers/profile");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.get("/me", protect, getLoggedInUserProfile);
router.post("/", protect, createdOrUpdateUserProfile);

module.exports = router;
