import React from 'react';
import '../styles/DashboardStats.css';
import student from '../images/student.svg';
import circlesb from '../images/circles-seven-black.svg';
import studento from '../images/student-orange.svg';

const DashboardStats = () => {
    return (
        <div className="dashboard-stats">
            <div className="stat-card purple">
                <img src={student} alt="Student Icon" className="icons" />
                <div className="divider"></div>
                <div className="details">
                    <h2>Students</h2>
                    <p>25,000</p>
                </div>
            </div>
            <div className="stat-card black">
                <img src={circlesb} alt="Courses Icon" className="icons" />
                <div className="divider"></div>
                <div className="details">
                    <h2>Courses</h2>
                    <p>100</p>
                </div>
            </div>
            <div className="stat-card yellow">
                <img src={studento} alt="Enrolled Students" className="icons" />
                <div className="divider"></div>
                <div className="details">
                    <h2>Enrolled Students</h2>
                    <p>10,000</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
