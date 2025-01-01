import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface VideoEmbedProps {
  videoId: string;
  height: string;
  width: string;
  className?: string; // Classe personnalisée facultative
}

function VideoEmbed({ videoId, height, width, className }: VideoEmbedProps) {
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

  return (
    <YouTube
      className={`video-embed ${className || ''}`} // Ajout de la classe personnalisée
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}

export default VideoEmbed;
