import React from 'react';
import {
  Layout,
  Menu,
  Row,
  Badge,
  Col,
  Avatar,
  Input,
  Card,
  Divider,
  Tabs,
  Modal,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  PlayCircleOutlined,
  MessageOutlined,
  BellOutlined,
  SearchOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Link, Element } from 'react-scroll';


const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;

const FacebookHomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  // Function to handle story click and show the modal
  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  const storiesData = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    },
    {
      id: 3,
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    },
    {
      id: 4,
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    },
    {
      id: 5,
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    },
    // Add more dummy data here
  ];

  const reelsData = [
    {
      id: 1,
      user: {
        name: 'Michael Johnson',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      video: 'https://www.example.com/reel1.mp4',
    },
    {
      id: 2,
      user: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      video: 'https://www.example.com/reel2.mp4',
    },
    {
      id: 3,
      user: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      video: 'https://www.example.com/reel2.mp4',
    },
    {
      id: 4,
      user: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      video: 'https://www.example.com/reel2.mp4',
    },
    {
      id: 5,
      user: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      video: 'https://www.example.com/reel2.mp4',
    },
    {
      id: 6,
      user: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      video: 'https://www.example.com/reel2.mp4',
    },
    // Add more dummy data here
  ];
  const rightSidebarData = {
    friendSuggestions: [
      {
        id: 1,
        name: 'Kate Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      {
        id: 2,
        name: 'Michael Smith',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      },
      {
        id: 3,
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      },
    ],
    trendingTopics: [
      { id: 1, topic: 'Technology' },
      { id: 2, topic: 'Travel' },
      { id: 3, topic: 'Food' },
    ],
  };
  const newsFeedData = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      image: 'https://via.placeholder.com/400',
      title: 'Exciting News 1',
      description:
        'This is an exciting piece of news. Stay tuned for more updates!',
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      image: 'https://via.placeholder.com/400',
      title: 'Breaking News 2',
      description: 'Breaking news just in! Check out the latest updates.',
    },
    {
      id: 3,
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      image: 'https://via.placeholder.com/400',
      title: 'Breaking News 2',
      description: 'Breaking news just in! Check out the latest updates.',
    },
    {
      id: 4,
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      image: 'https://via.placeholder.com/400',
      title: 'Breaking News 2',
      description: 'Breaking news just in! Check out the latest updates.',
    },
    // Add more dummy data here
  ];
  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <Row align="middle">
          <Col flex="150px">
            <div className="logo">
              <span style={{ fontSize: '24px', color: '#fff' }}>Cbook</span>
            </div>
          </Col>
          <Col flex="auto" style={{ maxWidth: '400px' }}>
            {/* Adjusted Search Bar Width */}
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search Facebook"
              style={{ width: '100%' }}
            />
          </Col>
          <Col flex="500px">
            {/* Right-aligned Icons */}
            <Row justify="end" align="middle">
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
      <Layout>
        <Element
          name="left-sidebar"
          className="element"
          style={{
            overflowY: 'auto',
            height: 'calc(100vh - 64px)',
            background: '#fff',
          }}
        >
          <Sider
            width={300}
            style={{
              overflowY: 'auto',
              height: 'calc(100vh - 64px)',
              background: '#fff',
            }}
          >
            <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Friends
              </Menu.Item>
              <Menu.Item key="3" icon={<PlayCircleOutlined />}>
                Videos
              </Menu.Item>
              <Menu.Item key="4" icon={<MessageOutlined />}>
                Messages
              </Menu.Item>
              <Menu.Item key="5" icon={<BellOutlined />}>
                Notifications
              </Menu.Item>
            </Menu>
          </Sider>
        </Element>
        <Content
          style={{ padding: '24px', minHeight: '280px', overflowX: 'auto' }}
        >
          <Tabs defaultActiveKey="1" style={{ marginBottom: '120px' }}>
            {/* Tab for Stories */}
            <TabPane tab="Stories" key="1">
              <div style={{ display: 'flex', gap: '12px', overflowX: 'auto' }}>
                {storiesData.map((story) => (
                  <div
                    key={story.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleStoryClick(story)} // Add onClick event
                  >
                    <Avatar src={story.user.avatar} size={64} />
                    <span style={{ marginTop: '8px' }}>{story.user.name}</span>
                  </div>
                ))}
              </div>
            </TabPane>
            {/* Tab for Reels */}
            <TabPane tab="Reels" key="2">
            <div style={{ display: 'flex', gap: '12px'}} className='custom-scrollbar-horizontal'>
                {/* <h3>Reels</h3> */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {reelsData.map((reel) => (
                    <div
                      key={reel.id}
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <video
                        src={reel.video}
                        width="150"
                        height="200"
                        controls
                        style={{ borderRadius: '8px', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabPane>
          </Tabs>
          {/* News Feed */}
          <div className = "custom-scrollbar" style={{ marginBottom: '16px', maxHeight: 'calc(100vh - 64px - 2 * 16px)' }}>
            <h3>News Feed</h3>
            {newsFeedData.map((newsItem) => (
              <Card key={newsItem.id}>
                <Card.Meta
                  avatar={<Avatar src={newsItem.user.avatar} />}
                  title={newsItem.title}
                  description={newsItem.description}
                />
                <img
                  src={newsItem.image}
                  alt="News"
                  style={{
                    width: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            ))}
          </div>
          {/* Modal to display the story */}
          <Modal
            open={isModalVisible}
            title={selectedStory && selectedStory.user.name}
            onCancel={handleModalClose}
            footer={null}
          >
            {selectedStory && (
              <div>
                <Avatar src={selectedStory.user.avatar} size={64} />
                <p>{selectedStory.content}</p>
                <p>Likes: {selectedStory.likes}</p>
                <p>Comments: {selectedStory.comments}</p>
              </div>
            )}
          </Modal>
        </Content>
        {/* Right Sidebar */}
        <Element
          name="right-sidebar"
          className="element"
          style={{
            overflowY: 'auto',
            height: 'calc(100vh - 64px)',
            background: '#fff',
          }}
        >
          <Sider
            width={300}
            style={{
              overflowY: 'auto',
              height: 'calc(100vh - 64px)',
              background: '#fff',
            }}
          >
            <div style={{ padding: '16px', background: '#fff' }}>
              <h3>Friend Suggestions</h3>
              {rightSidebarData.friendSuggestions.map((friend) => (
                <div key={friend.id} style={{ marginBottom: '8px' }}>
                  <Avatar
                    src={friend.avatar}
                    size={40}
                    style={{ marginRight: '8px' }}
                  />
                  <span>{friend.name}</span>
                </div>
              ))}
              <Divider />
              <h3>Trending Topics</h3>
              {rightSidebarData.trendingTopics.map((topic) => (
                <div key={topic.id} style={{ marginBottom: '8px' }}>
                  <span>#{topic.topic}</span>
                </div>
              ))}
            </div>
          </Sider>
        </Element>
      </Layout>
    </Layout>
  );
};

export default FacebookHomePage;
