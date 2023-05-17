import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 8],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as 'top',
        },
        labels: {
            boxWidth: 10,
            borderRadius: 50,
        },
    },
};

function Tasks() {
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default Tasks
