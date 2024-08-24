import React from 'react';
import '../styles/PerformanceChart.css';

const PerformanceChart = () => {
    return (
        <div className="performance-chart">
            <h2>Students Performance</h2>
            <div className="chart-container">
                <div className="chart-summary">
                    <div>Last Month <br /> Performance</div>
                    <div>Present Month <br /> Performance</div>
                    <div>Average Month <br /> Performance</div>
                </div>
                <div className="chart-index">
                    <div>100</div>
                    <div>75</div>
                    <div>50</div>
                    <div>25</div>
                    <div>00</div>
                </div>
                <div className="chart">
                    <div className="bar last-month"></div>
                    <div className="bar present-month"></div>
                    <div className="bar average"></div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceChart;
