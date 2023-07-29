import {
  HomeOutlined,
  VideoCameraOutlined,
  BellOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Affix, Menu } from 'antd';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Affix
      offsetBottom={0}
      style={{ display: 'none' }}
      className="custom-mobile-footer"
    >
      <Menu
        mode="horizontal"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '12px 0',
          background: '#ffffff',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '30px',
          height: '8vh',
        }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">News</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/videos">Videos</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BellOutlined />}>
          Notifications
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </Affix>
  );
}

export default Footer;
