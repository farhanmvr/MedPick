import { Spin } from 'antd';

export default function Loading() {
  return (
    <div className="loading flex justify-center items-center">
      <Spin />
    </div>
  );
}
