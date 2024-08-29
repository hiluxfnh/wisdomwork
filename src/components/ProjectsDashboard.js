import React from 'react';
import '../styles/ProjectsDashboard.css';
import sky from '../images/sky.png';
import loop from '../images/search.svg';
import Netflix from '../images/Netflix-logo.svg';

const ProjectsDashboard = () => {
    const projects = [
        {
            logo: 'path_to_logo',
            title: 'Development hack ton',
            organizer: 'Mr. Ram Krishn',
            dateRange: '12/02/2024 - 09/03/2024',
            tags: ['Java', 'Python', '20,000/INR Prize', 'Paid', 'UI/UX'],
            applicantsInfo: '2 days ago | 12 applicants'
        },
        {
            logo: 'path_to_logo',
            title: 'Development hack ton',
            organizer: 'Mr. Ram Krishn',
            dateRange: '12/02/2024 - 09/03/2024',
            tags: ['Java', 'Python', '20,000/INR Prize', 'Paid', 'UI/UX'],
            applicantsInfo: '2 days ago | 12 applicants'
        },
        {
            logo: 'path_to_logo',
            title: 'Development hack ton',
            organizer: 'Mr. Ram Krishn',
            dateRange: '12/02/2024 - 09/03/2024',
            tags: ['Java', 'Python', '20,000/INR Prize', 'Paid', 'UI/UX'],
            applicantsInfo: '2 days ago | 12 applicants'
        },
        // Add more projects here as needed
    ];

    return (
        <div className="projects-dashboard">
            <div className="header">
                <img src={sky} alt="Discover Project" className="header-image" />
                <h1>Discover Project</h1>
            </div>
            <div className="search-and-filter">
                <div className="search-bars">
                    <img src={loop} alt="Search" className="search-icon" />
                {/* <button className="search-icon"></button> */}
                    <input type="text" placeholder="Search" />
                </div>
                <div className="filter">
                    <button className="sort-button">Sort by Latest</button>
                </div>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={Netflix} alt="Logo" className="project-logo" />
                        <h3>{project.title}</h3>
                        <p className="project-organizer">{project.organizer}</p>
                        <p className="project-date">{project.dateRange}</p>
                        <div className="tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                        <p className="applicants-info">{project.applicantsInfo}</p>
                    </div>
                ))}
                <div className="project-card post-project-card">
                    <div className="post-project-content">
                        <div className="add-icon">+</div>
                        <button className="post-project-button">Post a project</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsDashboard;
