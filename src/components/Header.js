import React from 'react';
import '../styles/Header.css';
import wave from '../images/hand-wave.svg';
import loop from '../images/search.svg';
import message from '../images/messages.svg';
import notification from '../images/notification.svg';
import person from '../images/balance-man.svg';

const Header = () => {
    return (
        <header className="header-top">
            <div className="header">
                <div className="greeting">
                    <img src={wave} alt="wave" className="icon-header" width="50" height="50" />
                    <div className="greeting-text">
                        <h1>Hi, YUVRAJ</h1> 
                        <p>Manage courses</p>
                    </div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search...I" />
                    <button className="search-btn">
                        <img src={loop} alt="search" className="search-icon" />
                    </button>
                </div>
                <div className="profile-settings">
                    <button className="profile-btn"><img src={message} alt="message" /></button>
                    <button className="profile-btn"><img src={notification} alt="notification" /></button>
                    <button className="profile-btn"><img src={person} alt="person" /></button>
                </div>
            </div>

            <div className="dasboard-head">
                <div className="dasboard-title">
                    <h2>Dashboard</h2>
                </div>
                <div className="dasboard-dots">
                    <p>...</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
