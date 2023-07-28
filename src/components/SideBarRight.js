import {
    Layout,
    Menu,
    Avatar,
    Divider
  } from 'antd';
  import {
    HomeOutlined,
    UserOutlined,
    PlayCircleOutlined,
    MessageOutlined,
    BellOutlined,
  } from '@ant-design/icons';

  const { Sider } = Layout;  




function SideBarRight() {

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
    return (  <Sider
        width={300}
        style={{
          overflowY: 'auto',
          height: 'calc(100vh - 64px)',
          background: '#fff',
        }}
        className="right-sidebar"
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
      </Sider>  );
}

export default SideBarRight;