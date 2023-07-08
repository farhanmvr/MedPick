import { Card, Radio } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function TotalIncidentsCard({ incidents }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: Object.keys(incidents),
    datasets: [
      {
        data: Object.values(incidents),
        backgroundColor: '#FEC601',
        barPercentage: 0.4,
      },
    ],
  };

  return (
    <Card>
      <h1 className="card-title">Total Incidents Recorded</h1>
      <div className="flex justify-between">
        <Radio.Group defaultValue="week" className="mt-4" buttonStyle="solid">
          <Radio.Button value="days">Days</Radio.Button>
          <Radio.Button value="week">Week</Radio.Button>
          <Radio.Button value="month">Month</Radio.Button>
          <Radio.Button value="custom">Custom</Radio.Button>
        </Radio.Group>
        <Radio.Group
          defaultValue="recorded"
          className="mt-4"
          buttonStyle="solid"
        >
          <Radio.Button value="recorded">Recorded</Radio.Button>
          <Radio.Button value="cleared">Cleared</Radio.Button>
        </Radio.Group>
      </div>
      <div className="mt-10 px-16 justify-center">
        <Bar data={data} options={options} />
        <div className="flex justify-center mt-2">
          <h2 className="mr-5">X-Axis : Weeks</h2>
          <h2 className="ml-5">Y-Axis : Incidents</h2>
        </div>
      </div>
    </Card>
  );
}
