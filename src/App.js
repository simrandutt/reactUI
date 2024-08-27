import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
import RadarChart from './components/RadarChart';

const App = () => {
    return (
        <div className="App">
            <h1>React Chart.js Dashboard</h1>
            <div className="chart-container">
                <BarChart />
                <LineChart />
                <PieChart />
                <DoughnutChart />
                <RadarChart />
            </div>
        </div>
    );
};

export default App;
