import VideoPlayer from 'react-native-video-controls';

import React from 'react';

const VideoComponent = ({setModalVisible}) => {
  return (
    <VideoPlayer
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      fullScreenOrientation="all"
      onBack={() => {
        setModalVisible(false);
      }}
      onEnd={() => {
        setModalVisible(false);
      }}
    />
  );
};

export default VideoComponent;
