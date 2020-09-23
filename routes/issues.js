const express = require('express');
const {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
} = require('../controllers/issues');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/').get(getIssues).post(protect, createIssue);

router
  .route('/:id')
  .get(getIssue)
  .put(protect, updateIssue)
  .delete(protect, deleteIssue);

module.exports = router;
