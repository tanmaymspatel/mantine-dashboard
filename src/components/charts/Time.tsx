import { Bar } from 'react-chartjs-2';
import { Chart, ChartOptions, ChartData } from 'chart.js';
import { Title, useMantineTheme } from '@mantine/core'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

function Time() {

    const theme = useMantineTheme();

    const data: ChartData<'bar'> = {
        labels: ['Planned Complete', 'Actual Completion', 'Ahead', '', '', ''],
        datasets: [
            {
                label: 'Ahead',
                data: [0],
                backgroundColor: ['#3faeee'],
                borderWidth: 1
            },
            {
                label: 'Behind',
                data: [0],
                backgroundColor: ['#f8a646'],
                borderWidth: 1
            },
            {
                label: 'On Time',
                data: [0, 14, 14],
                backgroundColor: ['#68cb69'],
                borderWidth: 1
            },
        ]
    };
    const options: ChartOptions<'bar'> =
    {
        responsive: true,
        indexAxis: 'y',
        // maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                max: 100,
                min: -100,
                border: {
                    display: false,
                },
                // grid: {
                //     color: "rgba(31,34,48,0.4)",
                // },
                ticks: {
                    callback: function (value: any) {
                        return Math.abs(value); // Return the absolute value
                    },
                    stepSize: 25,
                },
            },
            y: {
                stacked: true,
                grid: {
                    display: false,
                },
                ticks: {
                    crossAlign: "far",
                }
            }
        },
        plugins: {
            datalabels: {
                anchor: "start",
                align: "start",
                font:
                    { size: 16 },
                formatter: (value: any) => (`${value}%`),
                color: (chart: any) => (chart.dataset.backgroundColor)
            },
            legend: {
                position: "top",
                align: "start",
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 5,
                    padding: 20,
                }
            }
        }
    };

    return (
        <div>
            <Title fw={400} color={theme.white} order={4}>Time</Title>
            <Bar data={data} options={options} />
        </div>
    )
}

export default Time
