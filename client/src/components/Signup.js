import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('resume', formData.resume);

        try {
            const res = await axios.post('https://work-application-1.onrender.com/api/signup', data);
            alert(res.data.message);
        } catch (err) {
            console.error(err);
            alert('Error submitting the form');
        }
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
                
                <label>Phone:</label>
                <input type="tel" name="phone" onChange={handleChange} required />
                
                <label>Resume:</label>
                <input type="file" name="resume" onChange={handleFileChange} required />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
