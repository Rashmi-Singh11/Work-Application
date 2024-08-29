import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Job Portal</h1>
            <Link to="/signup">Go to Signup</Link>
        </div>
    );
};

export default Home;
