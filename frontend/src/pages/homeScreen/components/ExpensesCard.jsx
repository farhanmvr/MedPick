import { Card } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export default function ExpencesCard({ expenses }) {
  const expenseColorMap = {
    spares: {
      color: '#3DA5D9',
      label: 'Spares',
    },
    service_charges: {
      color: '#004F95',
      label: 'Service Charges',
    },
    cmc: {
      color: '#EA7317',
      label: 'CMC',
    },
    amc: {
      color: '#FEC601',
      label: 'AMC',
    },
  };

  const data = {
    labels: Object.values(expenseColorMap)?.map((el) => el?.label),
    datasets: [
      {
        label: 'Expenses',
        data: Object.keys(expenseColorMap)?.map((el) => expenses?.[el] ?? 0),
        backgroundColor: Object.values(expenseColorMap)?.map((el) => el?.color),
        borderColor: ['#fff', '#fff', '#fff', '#fff'],
        borderWidth: 10,
      },
    ],
  };

  return (
    <Card>
      <h1 className="text-center card-title">Expenses</h1>
      <div style={{ height: '240px' }}>
        <Doughnut style={{ margin: 'auto' }} data={data} />
      </div>
    </Card>
  );
}
