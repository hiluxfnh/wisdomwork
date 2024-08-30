// JobDashboard.js
import React from 'react';
import '../styles/JobDashboard.css'; // Assuming you will create a CSS file for styling

const JobDashboard = () => {
    return (
        <div className="job-dashboard">
            <header className="header">
                <h1>Jobs</h1>
                <button className="post-job-btn">Post a Job</button>
            </header>
            <section className="banner">
                <h2>Discover Jobs</h2>
                <p>Discover your next teaching job</p>
            </section>
            <div className="search-section">
                <div className="search-bar">
                    <input type="text" placeholder="Search Jobs by Subject, Qualification" />
                    <button className="search-btn">🔍</button>
                </div>
                <div className="filter-options">
                    <button className="filter-btn">Sort by Latest</button>
                    <button className="filter-btn">Location</button>
                    <button className="filter-btn">Part-time</button>
                    <button className="filter-btn">Full time</button>
                </div>
            </div>
            <div className="job-list">
                {/* Repeat for each job card */}
                <div className="job-card">
                    <img src="school-logo.png" alt="School Logo" className="job-logo" />
                    <div className="job-info">
                        <h3>History Teacher</h3>
                        <p>Delhi Public School</p>
                        <p>A Biology Teacher for 11th & 12th class is required...</p>
                        <div className="job-tags">
                            <span>Rs. 40k-60k/month</span>
                            <span>New Delhi</span>
                            <span>3 YOE</span>
                        </div>
                    </div>
                    <button className="favorite-btn">⭐</button>
                </div>
                {/* Add more job cards as necessary */}
            </div>
        </div>
    );
}

export default JobDashboard;
