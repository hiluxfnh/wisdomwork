import React from 'react';
import '../styles/StudentsTable.css';

const StudentsTable = () => {
    return (
        <div className="students-table">
            <h2>All Students</h2>
            <p>Active Members</p>
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
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;
