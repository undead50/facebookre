import Card from 'antd/es/card/Card';
import VideoPlayer from '../../components/VideoPlayer';
import { useApi } from '../../hooks';
import { useEffect } from 'react';
import { useState } from 'react';

function Videos() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const channelId = process.env.REACT_APP_CHANNEL_ID;

  const [listData, setlistData] = useState([]);

  const params = {
    part: 'snippet',
    channelId: channelId,
    maxResults: 5,
    key: apiKey,
  };
  const { data, loading, error } = useApi(apiUrl + `/search`, params);

  useEffect(() => {
    console.log(data);
    if (data !== null) {
      setlistData(data.items);
    }
  }, [data]);

  useEffect(() => {
    console.log(listData.videoId);
  }, [listData]);

  return (
    <>
      {listData.map((list) => (
        <Card key={list.id.videoId} style={{ marginTop: '10px' }}>
          {/* ... (previous card content) */}

          <VideoPlayer
            videoId={list.id.videoId}
            title={list.snippet.title}
            description={list.snippet.description}
          />
        </Card>
      ))}
    </>
  );
}

export default Videos;
