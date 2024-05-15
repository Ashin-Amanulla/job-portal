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
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  country:{
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
    required:true,
    trim: true
  },

  industry: {
    type: String,
    required: true,
    trim: true
  },
  company_name:{
    type: String,
    required: true,
    trim: true
  },
  company_logo:{
    type: String,
    
  },
  job_type: {
    type: String,
    required: true,
    trim: true
  },
  work_nature: {
    type: String,
    required: true,
    trim: true
  },
  closing_date: {
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
