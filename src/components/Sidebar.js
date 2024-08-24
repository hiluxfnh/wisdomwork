import React from 'react';
import '../styles/Sidebar.css';
import wisdomworkLogoName from '../images/wisdomwork_logo_name.svg';
import gradCap from '../images/cap.svg';
import calendar from '../images/Calendar.svg';
import Folder from '../images/Folder.svg';
import circleSeven from '../images/circles-seven.svg';
import Bag from '../images/Bag.svg';
import medal from '../images/medal.svg';
import blog from '../images/blog.svg';
import location from '../images/location.svg';
import logout from '../images/logout.svg';
import settingTwo from '../images/setting-two.svg';
import profilePic from '../images/profile.jpg';
import back from '../images/back.svg'; // Add your close icon here

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={wisdomworkLogoName} alt="Wisdom Work Logo" />
            </div>
            <nav>
                <ul>
                    <li className="active"> <img src={gradCap} alt="Graduation Cap" className="icon" /> Dashboard</li>
                    <li> <img src={calendar} alt="Calendar" className="icon" />Courses Dashboard</li>
                    <li> <img src={Folder} alt="Folder" className="icon" /> Projects Dashboard</li>
                    <li> <img src={circleSeven} alt="circleSeven" className="icon" /> Assessment Dashboard</li>
                    <li> <img src={Bag} alt="Bag" className="icon" /> Job Dashboard</li>
                    <li> <img src={medal} alt="medal" className="icon" /> Student Dashboard</li>
                    <li> <img src={blog} alt="blog" className="icon" /> Blogs Dashboard</li>
                </ul>
                <hr className='hr-line'/>
            </nav>
            <div className="user-section">
                <div className="user-info">
                    <img src={profilePic} alt="Yuvraj" className="profile-pic" />
                    <div className="user-details">
                        <h3>Yuvraj</h3>
                        <p>
                            <img src={location} alt="location" className="iconsf" /> Bengaluru
                        </p>
                    </div>
                </div>

                <div className="user-stats">
                    <div className="settings-logout">
                        <button className="settings-btn">
                            <img src={settingTwo} alt="Settings Icon" className="iconsf" />
                            Settings
                        </button>
                        <button className="logout-btn">
                            <img src={logout} alt="Logout Icon" className="iconsf" />
                            Logout
                        </button>
                    </div>
                    <div className="close-sidebar">
                        <img src={back} alt="Close Sidebar" className="close-icon" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;