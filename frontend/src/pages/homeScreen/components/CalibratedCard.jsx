import { Card } from 'antd';
import Progress from '../../../components/Pregress';

export default function CalibratedCard({ calibrated }) {
  return (
    <Card className="m-auto">
      <h1 className="text-center card-title">Calibrated</h1>
      <Progress
        className="mt-5"
        color="#3DA5D9"
        text="Calibrated"
        percent={calibrated?.calibrated}
        size="small"
      />
      <Progress
        className="mt-5"
        color="#EA7317"
        text="Not Calibrated"
        percent={calibrated?.not_calibrated}
        size="small"
      />
      <Progress
        className="mt-5"
        color="#FEC601"
        text="Not Required"
        percent={calibrated?.not_required}
        size="small"
      />
    </Card>
  );
}
