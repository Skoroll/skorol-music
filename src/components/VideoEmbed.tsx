import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface VideoEmbedProps{
  videoId: string;
  height: string;
  width: string;
}

function VideoEmbed({ videoId, height, width }: VideoEmbedProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // accès au lecteur via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: `${height}`,
    width: `${width}`,
    playerVars: {
    autoplay: 0,
    },
  };

  return <YouTube className="video-embed flex justify-stretch w-full lg:w-9/12 mr-auto ml-auto max-h-96 max-w-screen-lg" videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}

export default VideoEmbed;  
