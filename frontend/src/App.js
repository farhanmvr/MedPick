import Sidebar from './components/SideBar';
import { Layout } from 'antd';
import HomeScreen from './pages/homeScreen';
import Header from './components/Header';
import { RootContainer } from './styles';
const { Sider, Content } = Layout;

function App() {
  return (
    <RootContainer>
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Content>
            <Header />
            <HomeScreen />
          </Content>
        </Layout>
      </Layout>
    </RootContainer>
  );
}

export default App;
