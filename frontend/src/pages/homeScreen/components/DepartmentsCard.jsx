import { Card, Progress } from 'antd';

export default function DepartmentsCard({ departments }) {
  const departmentColorMap = {
    laboratory: {
      label: 'Laboratory',
      color: '#004F95',
    },
    radiology: {
      label: 'Radiology',
      color: '#3DA5D9',
    },
    icu: {
      label: 'ICU',
      color: '#73BFB8',
    },
    operation_theatre: {
      label: 'Operation Theatre',
      color: '#FEC601',
    },
    opd: {
      label: 'OPD',
      color: '#EA7317',
    },
  };

  return (
    <Card>
      <h1 className="text-center card-title">Departments</h1>
      <div className="grid grid-cols-5 gap-4 mt-5">
        {Object.values(departmentColorMap)?.map((el, i) => (
          <div key={i} style={{ background: el?.color, height: '20px' }}></div>
        ))}
      </div>
      {Object.keys(departmentColorMap)?.map((dep, i) => (
        <div key={i}>
          <h1 className="text-label mt-5">
            {departmentColorMap?.[dep]?.label}
          </h1>
          <Progress
            strokeColor={departmentColorMap?.[dep]?.color}
            percent={departments?.[dep]}
            size={[-1, 20]}
          />
        </div>
      ))}
      <div className="text-center mt-5">
        <a className="underline" href="/">
          See More
        </a>
      </div>
    </Card>
  );
}
