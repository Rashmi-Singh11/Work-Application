const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Handle POST request for signup
router.post('/', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const resumePath = req.file.path;

        const newUser = new User({ name, email, phone, resume: resumePath });
        await newUser.save();

        res.status(200).json({ message: 'Signup successful!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred during signup' });
    }
});

module.exports = router;
