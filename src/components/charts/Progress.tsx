import { Bar } from 'react-chartjs-2';
import { Chart, ChartOptions, ChartData } from 'chart.js';
import { Title, useMantineTheme } from '@mantine/core'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

function Progress() {

    const theme = useMantineTheme();

    const changeColor = (context: Context) => {
        const index = context.dataIndex
        const dataValue: any = context.dataset.data[index];
        if (dataValue > 50) return theme.colors.mantis[0]
        if (dataValue < 1) return theme.colors.quickSilver[0]
        if (dataValue < 50) return theme.colors.raspberryPink[0]
    }

    const data: ChartData<'bar'> = {
        labels: ['Contracts', 'Design', 'Procurement', 'Construction', 'Post Construction', 'Project Closure'],
        datasets: [
            {
                label: 'Progress Chart',
                data: [100, 80, 19, 0.5, 0.5, 0.5], // Bar data values
                backgroundColor: changeColor,
                borderColor: 'transparent', // Bar border color
                borderWidth: 1,
                datalabels: {
                    anchor: "start",
                    align: "start",
                    formatter: (context: Context) => {
                        return context + "%";
                    },
                    color: changeColor as any,
                    font: {
                        size: 16,
                        weight: "bold",
                    }
                }
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        indexAxis: 'y', // Horizontal bar chart
        scales: {
            x: {
                display: false
            },
            y: {
                afterFit: function (scale) {
                    scale.width = 170;
                },
                ticks: {
                    font: {
                        size: 15,
                    },
                    color: "gray",
                    crossAlign: "far",
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false
            },
        },
    };

    return (
        <>
            <Title fw={400} color={theme.white} order={4}>Progress</Title>
            <Bar data={data} options={options} />
        </>
    )
}

export default Progress
