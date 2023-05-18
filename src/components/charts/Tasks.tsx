import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const data = {

    labels: ['Not Started(10)', 'Completed(6)', 'In Progress(2)'],
    datasets: [
        {
            label: '# of Votes',
            data: [10, 6, 2],
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
            display: true,
            position: 'top' as 'top',
            labels: {
                boxWidth: 10,
                borderRadius: 50,
                usePointStyle: true,
            },
        },

    },
};

function Tasks() {
    return (
        <>
            <div style={{ border: "1px solid red", height: "50px" }}></div>
            <div style={{ height: "300px" }}>
                <Doughnut data={data} options={options} />
            </div>
        </>
    )
}

export default Tasks
