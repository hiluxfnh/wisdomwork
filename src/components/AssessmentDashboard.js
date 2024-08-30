// AssessmentDashboard.js
import React from 'react';
import '../styles/AssessmentDashboard.css'; // Make sure to create this CSS file
import loop from '../images/search.svg';

const AssessmentDashboard = () => {
    return (
        <div className="dashboard-container">
            {/* <h2>Assessment Dashboard</h2> */}
            <div className="stats-cards">
                <div className="card total-assessments">
                    <p>Total Assessments</p>
                    <h1>02</h1>
                </div>
                <div className="card pending-assessments">
                    <p>Pending Assessment</p>
                    <h1>02</h1>
                </div>
                <div className="card completed-assessments">
                    <p>Completed Assessment</p>
                    <h1>02</h1>
                </div>
            </div>

            <div className="students-list">
                <div className="list-header">
                    <div className="list-header-all">
                        <div className="list-header-tudents">
                            <h3>All Students</h3>
                        </div>
                        <div className="list-header-members">
                            <p className="active-members">Active Members</p>
                        </div>
                    </div>
                    <div className="search-bars search-barss">
                        <img src={loop} alt="Search" className="search-icon" />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Students name</th>
                            <th>Date Shared</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jane Cooper</td>
                            <td>12/02/2024</td>
                            <td>(225) 555-0118</td>
                            <td>jane@microsoft.com</td>
                            <td><span className="status submitted">Submitted</span></td>
                        </tr>
                        <tr>
                            <td>Floyd Miles</td>
                            <td>12/02/2024</td>
                            <td>(205) 555-0100</td>
                            <td>floyd@yahoo.com</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>Ronald Richards</td>
                            <td>12/02/2024</td>
                            <td>(302) 555-0107</td>
                            <td>ronald@adobe.com</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>Marvin McKinney</td>
                            <td>12/02/2024</td>
                            <td>(252) 555-0126</td>
                            <td>marvin@tesla.com</td>
                            <td><span className="status submitted">Submitted</span></td>
                        </tr>
                        <tr>
                            <td>Jerome Bell</td>
                            <td>12/02/2024</td>
                            <td>(629) 555-0129</td>
                            <td>jerome@google.com</td>
                            <td><span className="status submitted">Submitted</span></td>
                        </tr>
                        <tr>
                            <td>Kathryn Murphy</td>
                            <td>12/02/2024</td>
                            <td>(406) 555-0120</td>
                            <td>kathryn@microsoft.com</td>
                            <td><span className="status submitted">Submitted</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AssessmentDashboard;
