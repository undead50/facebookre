import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  PlayCircleOutlined,
  MessageOutlined,
  BellOutlined,
} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function SideBarLeft() {
  const navigate = useNavigate();
  return (
    <Sider
      width={300}
      style={{
        overflowY: 'auto',
        height: 'calc(100vh - 64px)',
        background: '#fff',
      }}
      className="left-sidebar"
    >
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          About Me
        </Menu.Item>
        <Menu.Item key="3" icon={<PlayCircleOutlined />}>
          <Link to="/videos">Videos</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<MessageOutlined />}>
          Messages
        </Menu.Item>
        <Menu.Item key="5" icon={<BellOutlined />}>
          Notifications
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBarLeft;
