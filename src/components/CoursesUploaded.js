import React from 'react';
import '../styles/CoursesUploaded.css';

const CoursesUploaded = () => {
    return (
        <div className="courses-uploaded">
            <h2>Courses Uploaded Recently</h2>
            <div className="course-card">
                <img src="course-image.png" alt="Graphic Design" />
                <div className="course-info">
                    <h3>Graphic Design</h3>
                    <p>Where professionals create visual content to communicate messages.</p>
                    <p>265.75k students enrolled</p>
                    <button className="edit-btn">EDIT</button>
                </div>
            </div>
        </div>
    );
};

export default CoursesUploaded;
