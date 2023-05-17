import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sales',
            data: [30, 45, 60, 35, 50, 75],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
    plugins: {
        legend: {
            position: 'bottom' as 'bottom',
        },
    },
};

function Cost() {
    return (
        <Bar data={data} options={options} />
    )
}

export default Cost
