const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors({
     origin : ["https://work-application.1whq.vercel.app"],
     methods:["POST" , "GET"],
     credentials:true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files
mongoose.connect('mongodb+srv://kalpesh_158:90pvNz4OSGVkgABP@cluster0.ksqwf0d.mongodb.net/auth-db');
app.get("/",(req.res)=>{
    res.json("Hello");
})
// Routes
const signupRoute = require('./routes/signup');
app.use('/api/signup', signupRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
