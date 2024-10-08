import React from 'react';
import '../styles/StudentsTable.css';

const StudentsTable = () => {
    return (
        <div className="students-table">
            <div className="students-table-header">
                <div className="students-table-header-title">
                    <h2>All Students</h2>
                    <p className="active-members">Active Members</p>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Students name</th>
                        <th>Date Shared</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jane Cooper</td>
                        <td>12/02/2024</td>
                        <td>(225) 555-0118</td>
                        <td>jane@microsoft.com</td>
                    </tr>
                    <tr>
                        <td>Floyd Miles</td>
                        <td>12/02/2024</td>
                        <td>(205) 555-0100</td>
                        <td>floyd@yahoo.com</td>
                    </tr>
                    <tr>
                        <td>Ronald Richards</td>
                        <td>12/02/2024</td>
                        <td>(302) 555-0107</td>
                        <td>ronald@adobe.com</td>
                    </tr>
                    <tr>
                        <td>Marvin McKinney</td>
                        <td>12/02/2024</td>
                        <td>(252) 555-0126</td>
                        <td>marvin@tesla.com</td>
                    </tr>
                    <tr>
                        <td>Jerome Bell</td>
                        <td>12/02/2024</td>
                        <td>(629) 555-0129</td>
                        <td>jerome@google.com</td>
                    </tr>
                    <tr>
                        <td>Jerome Bell</td>
                        <td>12/02/2024</td>
                        <td>(629) 555-0129</td>
                        <td>jerome@google.com</td>
                    </tr>
                    <tr>
                        <td>Jerome Bell</td>
                        <td>12/02/2024</td>
                        <td>(629) 555-0129</td>
                        <td>jerome@google.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;
