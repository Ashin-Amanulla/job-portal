const { signAccessToken, signRefreshToken } = require('../utils/jwt_helper');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const Admin = require('../models/Admin');
const { randomPassword } = require('../utils/password');
const { sendNewPasswordMail, validateEmail } = require('../utils/email_sender');


// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const password = randomPassword();
        const hashedPassword = await hashPassword(password);
        const isExist = await Admin.findOne({ email: req.body.email });
        if(isExist) throw new Error ('Admin already exists')

        const admin = new Admin({
            ...req.body,
            password_hash: hashedPassword,
        });
        await sendNewPasswordMail(req.body.name, req.body.email, password)

        await admin.save();
        // const token = await signAccessToken(admin._id, admin.role, admin.email);
        delete admin["password_hash"]
        res.status(201).send({status : true ,data: admin /*,token */});
    } catch (error) {
        console.log("got error", error);
        res.status(400).send(error);
    }
};

// Admin login
exports.adminSignIn = async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email });
        if (!admin) throw new Error ("Admin Email not found")

        const isPasswordMatch = await comparePassword(req.body.password, admin.password_hash);
        if (!isPasswordMatch) throw new Error ("Admin Password error")

        const token = await signAccessToken(admin._id, admin.role, admin.email);
        res.status(200).send({ admin, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
};




// Get all admins
exports.getAllAdmin = async (req, res) => {
    try {
        const admins = await Admin.find({}).select('-password_hash');
        res.send({status:true,result:admins});
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