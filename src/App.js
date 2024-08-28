import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import StudentsTable from './components/StudentsTable';
import PerformanceChart from './components/PerformanceChart';
import CoursesUploaded from './components/CoursesUploaded';
import CoursesDashboard from './components/CoursesDashboard';
import ProjectsDashboard from './components/ProjectsDashboard';
import AssessmentDashboard from './components/AssessmentDashboard';
import JobDashboard from './components/JobDashboard';
import StudentDashboard from './components/StudentDashboard';
import BlogsDashboard from './components/BlogsDashboard';
import './App.css';

function App() {
    const [activeDashboard, setActiveDashboard] = useState('dashboard');

    const renderDashboard = () => {
        switch (activeDashboard) {
            case 'dashboard':
                return (
                    <>
                        <DashboardStats />
                        <div className="dashboard-content">
                            <div className="students-table">
                                <StudentsTable />
                            </div>
                            <div className="students-tablea">
                                <PerformanceChart />
                                <CoursesUploaded />
                            </div>
                        </div>
                    </>
                );
            case 'courses':
                return <CoursesDashboard />;
            case 'projects':
                return <ProjectsDashboard />;
            case 'assessment':
                return <AssessmentDashboard />;
            case 'jobs':
                return <JobDashboard />;
            case 'students':
                return <StudentDashboard />;
            case 'blogs':
                return <BlogsDashboard />;
            default:
                return null;
        }
    };

    return (
        <div className="App">
            <Sidebar activePage={activeDashboard} setActiveDashboard={setActiveDashboard} />
            <div className="main-content">
                <Header />
                {renderDashboard()}
            </div>
        </div>
    );
}

export default App;
