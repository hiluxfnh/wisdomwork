// CoursesDashboard.js
import React from 'react';
import CourseCard from './CourseCard';
import '../styles/CoursesDashboard.css';

const CoursesDashboard = () => {
    const courses = [
        {
            image: 'path_to_image',
            category: 'GRAPHIC DESIGN',
            subCategory: 'UI/UX DESIGN',
            title: 'Graphic Design: A craft where professionals create visual content to communicate messages.',
            lessons: 15,
            hours: 40,
            date: '14/02/2024',
            students: '265.75K'
        },
        {
            image: 'path_to_image',
            category: 'GRAPHIC DESIGN',
            subCategory: 'UI/UX DESIGN',
            title: 'Graphic Design: A craft where professionals create visual content to communicate messages.',
            lessons: 15,
            hours: 40,
            date: '14/02/2024',
            students: '265.75K'
        },
        {
            image: 'path_to_image',
            category: 'GRAPHIC DESIGN',
            subCategory: 'UI/UX DESIGN',
            title: 'Graphic Design: A craft where professionals create visual content to communicate messages.',
            lessons: 15,
            hours: 40,
            date: '14/02/2024',
            students: '265.75K'
        },
        {
            image: 'path_to_image',
            category: 'GRAPHIC DESIGN',
            subCategory: 'UI/UX DESIGN',
            title: 'Graphic Design: A craft where professionals create visual content to communicate messages.',
            lessons: 15,
            hours: 40,
            date: '14/02/2024',
            students: '265.75K'
        },
        {
            image: 'path_to_image',
            category: 'GRAPHIC DESIGN',
            subCategory: 'UI/UX DESIGN',
            title: 'Graphic Design: A craft where professionals create visual content to communicate messages.',
            lessons: 15,
            hours: 40,
            date: '14/02/2024',
            students: '265.75K'
        }
    ];

    return (
        <div className="courses-dashboard">
            {/* <h2>Courses</h2> */}
            <div className="courses-grid">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
                <div className="course-card add-new-course">
                    <div className="add-course-icon">+</div>
                    <button className="new-course-button">New course</button>
                </div>
            </div>
        </div>
    );
}

export default CoursesDashboard;
