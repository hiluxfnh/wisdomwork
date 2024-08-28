import React from 'react';
import '../styles/CoursesUploaded.css';
import picture from '../images/picture.png';

const CoursesUploaded = () => {
    return (
        <div className="courses-uploaded">
            <h2>Courses Uploaded Recently</h2>
            <div className="course-card">
                <img src={picture} alt="Graphic Design" />
                <div className="course-info">
                    <div className="course-tags">
                        <h5 className='light-pink-this'>GRAPHIC DESIGN</h5> <h5 className='light-blue-this'>UI/UX DESIGN</h5>
                    </div>
                    <div className="course-head">
                        <div className="course-description">
                            <p><span className="bold-this">Graphics Design: </span>Where professionals create visual content to communicate messages.</p>
                            <p>⭐14-12-2024</p>
                        </div>
                        <div className="course-data">
                            <button className="edit-btn">EDIT</button>
                            <p>265.75k students enrolled</p>
                        </div> 
                    </div>              
                </div>
            </div>
        </div>
    );
};

export default CoursesUploaded;
