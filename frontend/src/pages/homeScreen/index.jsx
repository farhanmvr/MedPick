import { useEffect, useState } from 'react';
import AssetsCard from './components/AssetsCard';
import CalibratedCard from './components/CalibratedCard';
import DepartmentsCard from './components/DepartmentsCard';
import ExpencesCard from './components/ExpensesCard';
import IncidentManagementCard from './components/IncidentManagementCard';
import InserviceCard from './components/InserviceCard';
import TotalIncidentsCard from './components/TotalIncidentsCard';
import { Row, Col, message } from 'antd';
import axios from 'axios';
import Loading from '../../components/Loading';
import { getBaseURL } from '../../helpers';

const HomeScreen = () => {
  const [report, setReport] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${getBaseURL()}/report`);
      if (res.status === 200) {
        setReport(res?.data?.report);
      } else throw new Error();
    } catch (err) {
      message.error('Unable to load report details, please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : report?.incidents ? (
    <div className="p-10">
      <TotalIncidentsCard incidents={report?.incidents} />
      <div className="home-card-container">
        <Row gutter={15} className="mt-5">
          <Col span={6}>
            <ExpencesCard expenses={report?.expenses} />
          </Col>
          <Col span={6}>
            <InserviceCard services={report?.services} />
          </Col>
          <Col span={6}>
            <AssetsCard assets={report?.assets} />
          </Col>
          <Col span={6}>
            <IncidentManagementCard
              incident_management={report?.incident_management}
            />
          </Col>
        </Row>
      </div>
      <Row gutter={15} className="mt-5">
        <Col span={10}>
          <DepartmentsCard departments={report?.departments} />
        </Col>
        <Col span={14} className="m-auto">
          <CalibratedCard calibrated={report?.calibrated} />
        </Col>
      </Row>
    </div>
  ) : null;
};

export default HomeScreen;
