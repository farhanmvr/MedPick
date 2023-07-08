import { Card, Row, Col } from 'antd';
import { ReactComponent as InserviceIcon } from '../../../assets/icons/inservice.svg';

export default function InserviceCard({ services }) {
  return (
    <Card className="flex justify-center inservice-card">
      <h1 className="text-center card-title">In Service</h1>
      <div className="card-body">
        <InserviceIcon className="m-auto" />
        <Row gutter={20} className="mt-4">
          <Col className="text-center">
            <h2 className="text-key">Total Services</h2>
            <h4 className="text-value">{services?.total}</h4>
          </Col>
          <Col className="text-center">
            <h2 className="text-key">Open Services</h2>
            <h4 className="text-value">{services?.open}</h4>
          </Col>
        </Row>
      </div>
    </Card>
  );
}
