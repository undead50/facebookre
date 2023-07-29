import { Row, Badge, Col, Input, Layout } from 'antd';

import { BellOutlined, SearchOutlined, MailOutlined } from '@ant-design/icons';

const { Header } = Layout;

function CustomHeader() {
  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1 }}>
      <Row align="middle">
        <Col flex="150px">
          <div className="logo">
            <span style={{ fontSize: '24px', color: '#fff' }}>AP</span>
          </div>
        </Col>
        <Col flex="auto" style={{ maxWidth: '400px' }}>
          {/* Adjusted Search Bar Width */}
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search"
            style={{ width: '100%' }}
            className="search-component"
          />
        </Col>
        <Col flex="auto">
          {/* Right-aligned Icons */}
          <Row justify="end" align="middle" className="custom-notification">
            <Col>
              {/* Notification Icon */}
              <Badge count={7}>
                <BellOutlined
                  style={{
                    fontSize: '24px',
                    color: '#fff',
                    marginLeft: '12px',
                  }}
                />
              </Badge>
            </Col>
            <Col>
              {/* Message Icon */}
              <Badge count={2}>
                <MailOutlined
                  style={{
                    fontSize: '24px',
                    color: '#fff',
                    marginLeft: '12px',
                  }}
                />
              </Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}

export default CustomHeader;
