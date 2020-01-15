const asyncHandler = require("../middleware/async");
const Profile = require("../models/Profile");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Get current users profile
// @route   GET /api/v1/profile/me
// @access  Private
exports.getLoggedInUserProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id });

  if (!profile) {
    return next(new ErrorResponse("No profile data found", 400));
  }

  res.status(200).json({
    success: true,
    data: profile
  });
});

// @desc     Create or update user profile
// @route    POST/api/v1/profile
// @access   Private
exports.createdOrUpdateUserProfile = asyncHandler(async (req, res, next) => {
  const { address } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (address) profileFields.address = address;

  // Using upsert option (creates new doc if no match is found):
  let profile = await Profile.findOneAndUpdate(
    { user: req.user.id },
    { $set: profileFields },
    { new: true, upsert: true }
  );

  res.status(200).json({
    success: true,
    data: profile
  });
});
