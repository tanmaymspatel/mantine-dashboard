import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { Title, useMantineTheme } from '@mantine/core'

function Progress() {

    const theme = useMantineTheme();
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
        datasets: [
            {
                label: 'Data',
                data: [100, 80, 19, 0, 0, 0], // Bar data values
                backgroundColor: 'rgba(75,192,192,0.6)', // Bar color
                borderColor: 'rgba(75,192,192,1)', // Bar border color
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        indexAxis: 'y', // Horizontal bar chart
        scales: {
            x: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: 'left',
                display: false
            },
        },
    };
    return (
        <>
            <Title fw={400} color={theme.white} order={4}>Health</Title>
            <Bar data={data} options={options} />
        </>
    )
}

export default Progress
