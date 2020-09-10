const mongoose = require('mongoose');
const slugify = require('slugify');

const IssueSchema = new mongoose.Schema({
  issueName: {
    type: String,
    required: [true, 'Issue name required!'],
    unique: true,
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  slug: String,
  status: { type: String },
  priority: { type: String },
  description: { type: String },
  actionRequired: { type: String },
  dueDate: { type: Date },
  createdDate: { type: Date },
});

// Create user slug from the issue name
IssueSchema.pre('save', function (next) {
  this.slug = slugify(this.issueName, { lower: true });
  next();
});

module.exports = mongoose.model('Issue', IssueSchema);
