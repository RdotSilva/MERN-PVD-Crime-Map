const asyncHandler = require("../middleware/async");
const Profile = require("../models/Profile");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Get current users profile
// @route   GET /api/v1/profile/me
// @access  Private
exports.getLoggedInUserProfile = asyncHandler(async (req, res, next) => {
  const profile = await await Profile.findOne({ user: req.user.id });

  if (!profile) {
    return next(new ErrorResponse("No profile data found", 400));
  }

  res.status(200).json({
    success: true,
    data: profile
  });
});
