import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
    const data = {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                data: [20, 10, 4, 2]
            }
        ]
    };

    return <Radar data={data} />;
};

export default RadarChart;
