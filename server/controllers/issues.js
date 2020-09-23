const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Issue = require('../models/Issue');

// @desc Get all issues
// @route GET /api/v1/issues
// @access Public
exports.getIssues = asyncHandler(async (req, res, next) => {
  const issues = await Issue.find();

  res.status(200).json({ success: true, count: issues.length, data: issues });
});

// @desc Get single issue
// @route GET /api/v1/issues:id
// @access Public
exports.getIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return next(
      new ErrorResponse(`Issue not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: issue });
});

// @desc Create new issue
// @route POST /api/v1/issues
// @access Private
exports.createIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.create(req.body);

  res.status(201).json({
    success: true,
    data: issue,
  });
});

// @desc Update issue
// @route PUT /api/v1/issues:id
// @access Private
exports.updateIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!issue) {
    return next(
      new ErrorResponse(`Issue not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: issue });
});

// @desc Delete issue
// @route DELETE /api/v1/issues:id
// @access Private
exports.deleteIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findByIdAndDelete(req.params.id);

  if (!issues) {
    return next(
      new ErrorResponse(`Issue not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
