import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

export default function Header() {
  return (
    <div className="flex px-10 pt-10 items-center">
      <Input
        size="large"
        className="inpurt-search"
        prefix={<SearchOutlined />}
      />
      <Button
        type="primary"
        size="large"
        className="ml-10 flex items-center"
        icon={<PlusCircleOutlined />}
      >
        Add New
      </Button>
      <Button type="primary" className="ml-10">
        Sign In
      </Button>
      <Button className="ml-10 btn-secondary">Sign Up</Button>
    </div>
  );
}
