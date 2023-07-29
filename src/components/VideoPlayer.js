import React from 'react';
import ReactPlayer from 'react-player';
import './player.css';
// import { useSelector } from 'react-redux';
import { Card, Space, Row } from 'antd';
function VideoPlayer(props) {
  const { Meta } = Card;
  const videoSrc = `https://www.youtube.com/watch?v=${props.videoId}`;
  return (
    <>
      {/* <div className="custom_video"></div> */}
      <div className="custom_video">
        <Card
          size="small"
          title={props.title}
          extra={null}
          style={{ width: '100%' }}
        >
          <ReactPlayer url={videoSrc} controls playing={false} width="100%" />
          <p>{props.description}</p>
        </Card>
      </div>
    </>
  );
}

export default VideoPlayer;
