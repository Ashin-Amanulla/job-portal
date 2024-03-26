const { signAccessToken,signRefreshToken  } = require('../utils/jwt_helper');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const Admin = require('../models/Admin');


// Create a new admin
exports.createAdmin = async (req, res) => {
  try {
      const hashedPassword = await hashPassword(req.body.password);
      const admin = new Admin({
          ...req.body,
          password_hash: hashedPassword,
      });
      await admin.save();
      const token = await signAccessToken(admin._id, admin.role, admin.email);
      res.status(201).send({ admin, token });
  } catch (error) {
      res.status(400).send(error);
  }
};

// Admin login
exports.adminSignIn = async (req, res) => {
  try {
      const admin = await Admin.findOne({ email: req.body.email });
      if (!admin) {
          return res.status(404).send({ error: 'Login failed!' });
      }

      const isPasswordMatch = await comparePassword(req.body.password, admin.password_hash);
      if (!isPasswordMatch) {
          return res.status(400).send({ error: 'Login failed!' });
      }

      const token = await signAccessToken(admin._id, admin.role, admin.email);
      res.send({ admin, token });
  } catch (error) {
      res.status(500).send(error);
  }
};




// Get all admins
exports.getAllAdmin = async (req, res) => {
  try {
      const admins = await Admin.find({});
      res.send(admins);
  } catch (error) {
      res.status(500).send(error);
  }
};

// Get admin details
exports.getAdminDetails = async (req, res) => {
  try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) {
          return res.status(404).send();
      }
      res.send(admin);
  } catch (error) {
      res.status(500).send(error);
  }
};

// Edit admin details
exports.editAdminDetails = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password']; // Add or remove fields as necessary
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) {
          return res.status(404).send();
      }

      for (let update of updates) {
          if (update === 'password') {
              // Use hashPassword utility here
              admin['password_hash'] = await hashPassword(req.body[update]);
          } else {
              admin[update] = req.body[update];
          }
      }
      await admin.save();
      res.send(admin);
  } catch (error) {
      res.status(400).send(error);
  }
};

// Delete admin
exports.deleteAdminDetails = async (req, res) => {
  try {
      const admin = await Admin.findByIdAndDelete(req.params.id);
      if (!admin) {
          return res.status(404).send();
      }
      res.send(admin);
  } catch (error) {
      res.status(500).send(error);
  }
};