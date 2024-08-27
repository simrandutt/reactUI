import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    };

    return <Bar data={data} />;
};

export default BarChart;
