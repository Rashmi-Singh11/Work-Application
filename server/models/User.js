const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    resume: { type: String, required: true } // File path
});

module.exports = mongoose.model('User', userSchema);
