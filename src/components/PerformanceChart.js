import React from 'react';
import '../styles/PerformanceChart.css';

const PerformanceChart = () => {
    return (
        <div className="performance-chart">
            <h2>Students Performance</h2>
            <div className="chart">
                {/* Chart content goes here. Use libraries like Chart.js or just placeholder divs for bars */}
                <div className="bar last-month"></div>
                <div className="bar present-month"></div>
                <div className="bar average"></div>
            </div>
        </div>
    );
};

export default PerformanceChart;
