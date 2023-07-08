import { Card } from 'antd';
import Progress from '../../../components/Pregress';

export default function IncidentManagementCard({
  incident_management: { cleared, not_cleared },
}) {
  return (
    <Card>
      <h1 className="text-center card-title">Incident Management</h1>
      <div className="card-body">
        <Progress color="#29A343" text="Cleared" percent={cleared} />
        <Progress color="#E12C33" text="Not cleared" percent={not_cleared} />
      </div>
    </Card>
  );
}
