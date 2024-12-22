import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface VideoEmbedProps{
  videoId: string;
}

function VideoEmbed({ videoId }: VideoEmbedProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // accès au lecteur via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
    autoplay: 0,
    },
  };

  return <YouTube className="flex justify-center" videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}

export default VideoEmbed;  
