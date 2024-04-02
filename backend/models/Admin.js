const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password_hash: {
    type: String,
    required: true
  },
  jnv:{
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  super_admin: {
    type: Boolean,
    required: true,
    enum:[true,false],
    default:false
  },
},{
    timestamps: true,
});

const Admin = new mongoose.model('Admin', AdminSchema)

module.exports = Admin