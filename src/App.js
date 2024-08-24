import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import StudentsTable from './components/StudentsTable';
import PerformanceChart from './components/PerformanceChart';
import CoursesUploaded from './components/CoursesUploaded';
import './App.css';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="main-content">
                <Header />
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
            </div>
        </div>
    );
}

export default App;
