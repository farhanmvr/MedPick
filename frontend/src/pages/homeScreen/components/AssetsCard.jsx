import { Card } from 'antd';
import { ReactComponent as AssetsIcon } from '../../../assets/icons/assets.svg';

export default function AssetsCard({ assets }) {
  return (
    <Card className="flex justify-center assets-card">
      <h1 className="text-center card-title">Total Assets</h1>
      <div className="card-body">
        <AssetsIcon className="m-auto" />
        <h1 className="text-center text-count">{assets}</h1>
      </div>
    </Card>
  );
}
