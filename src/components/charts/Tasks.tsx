import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, ChartData } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { Title, useMantineTheme } from '@mantine/core';

Chart.register(ArcElement, ChartDataLabels);

function Tasks() {

    const theme = useMantineTheme()
    const data: ChartData<'doughnut'> = {
        labels: ['Not Started (10)', 'Completed (6)', 'In Progress (2)'],
        datasets: [
            {
                label: '# of Votes',
                data: [10, 6, 2],
                backgroundColor: [theme.colors.quickSilver[0], theme.colors.mantis[0], theme.colors.seaColor[0]],
                borderColor: "transparent",
                borderWidth: 1,
                offset: 10,
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    color: (context: Context) => {
                        const index = context.dataIndex
                        const colors: any = context.dataset.backgroundColor;
                        return colors[index]
                    },
                    font: {
                        size: 20,
                        weight: 'bold'
                    }
                }
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "85%",
        radius: 95,
        plugins: {
            legend: {
                display: true,
                position: 'top' as 'top',
                labels: {
                    boxWidth: 10,
                    borderRadius: 50,
                    usePointStyle: true,
                    color: theme.white
                },
            },


        }
    };

    // margin for legends
    const legendMargin = {
        id: 'legendMargin',
        beforeInit(chart: any) {
            const fiValue = chart.legend.fit;
            chart.legend.fit = function () {
                fiValue.bind(chart.legend)();
                return (this.height += 5);
            };
        },
    };

    const plugins = [legendMargin];

    return (
        <>
            <Title fw={400} color={theme.white} order={4}>Tasks</Title>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Doughnut data={data} options={options} plugins={plugins} />
            </div>
        </>
    )
}

export default Tasks


