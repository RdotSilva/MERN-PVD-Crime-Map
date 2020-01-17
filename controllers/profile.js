const asyncHandler = require("../middleware/async");
const Profile = require("../models/Profile");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Get current users profile
// @route   GET /api/v1/profile/me
// @access  Private
exports.getLoggedInUserProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.user.id
  }).populate("user", ["name"]);

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

  let profile = await Profile.findOne({ user: req.user.id });

  // If a profile already exists, update the current profile.
  if (profile) {
    profile = await Profile.findOneAndUpdate(
      {
        user: req.user.id
      },
      { $set: profileFields },
      { new: true }
    );
  }

  // Create new profile if no profile exists
  profile = new Profile(profileFields);
  await profile.save();

  res.status(200).json({
    success: true,
    data: profile
  });
});

// @desc     Delete user profile
// @route    DELETE/api/v1/profile
// @access   Private
exports.deleteUserProfile = asyncHandler(async (req, res, next) => {
  await Profile.findOneAndRemove({ user: req.user.id });

  res.status(200).json({
    success: true,
    msg: "User Profile deleted"
  });
});
