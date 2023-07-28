import {
    Avatar,
    Card,
  } from 'antd';

function Home() {

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
    

    return (<>
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
            ))}</>);
}
export default Home;