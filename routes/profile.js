const express = require("express");
const {
  getLoggedInUserProfile,
  createdOrUpdateUserProfile,
  deleteUserProfile
} = require("../controllers/profile");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.get("/me", protect, getLoggedInUserProfile);
router.post("/", protect, createdOrUpdateUserProfile);
router.delete("/", protect, deleteUserProfile);

module.exports = router;
