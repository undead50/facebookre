import React from 'react';
import { Layout, Avatar, Tabs, Modal } from 'antd';
import Footer from '../components/Footer';

import { useState } from 'react';
import { Link, Element } from 'react-scroll';
import CustomHeader from '../components/Header';
import SideBarLeft from '../components/SideBarLeft';
import SideBarRight from '../components/SideBarRight';
import { Outlet } from 'react-router-dom';

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
      video:
        'https://www.f5.com/content/dam/f5-labs-v2/media-files/video/Happy%20Cow.mp4',
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

  return (
    <Layout>
      <CustomHeader />
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
          <SideBarLeft />
        </Element>
        <Content
          style={{ padding: '24px', minHeight: '280px', overflowX: 'auto' }}
        >
          <Tabs defaultActiveKey="1" className="custom-tabs">
            {/* Tab for Stories */}
            <TabPane tab="Stories" key="1">
              <div
                className="custom-stories"
                style={{ display: 'flex', gap: '12px', overflowX: 'auto' }}
              >
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
              <div
                style={{ display: 'flex', gap: '12px' }}
                className="custom-scrollbar-horizontal"
              >
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
          <h3>News Feed</h3>
          <div className="custom-scrollbar">
            <Outlet />
          </div>
          {/* Modal to display the story */}
          <Modal
            open={isModalVisible}
            title={selectedStory && selectedStory.user.name}
            onCancel={handleModalClose}
            footer={null}
            className="custom-modal"
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
          <SideBarRight />
        </Element>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default FacebookHomePage;
