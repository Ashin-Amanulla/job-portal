const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true 
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  posted_by: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'Admin'
  },
  link: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    required: true,
    trim: true
  },
  job_type: {
    type: String,
    required: true,
    trim: true
  },
  experience_level: {
    type: String,
    required: true,
    trim: true
  },
  keywords: {
    type: [String], 
    default: []
  }
},{
    timestamps:true
});

module.exports = mongoose.model('Job', JobSchema);
