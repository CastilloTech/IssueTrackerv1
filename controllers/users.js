// @desc Get all users
// @route GET /api/v1/users
// @access Public
exports.getUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all users' });
};

// @desc Get single user
// @route GET /api/v1/users:id
// @access Public
exports.getUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show user ${req.params.id}` });
};

// @desc Create new user
// @route POST /api/v1/users
// @access Private
exports.createUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new users' });
};

// @desc Update user
// @route PUT /api/v1/users:id
// @access Private
exports.updateUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update user ${req.params.id}` });
};

// @desc Delete user
// @route DELETE /api/v1/users:id
// @access Private
exports.deleteUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete user ${req.params.id}` });
};
