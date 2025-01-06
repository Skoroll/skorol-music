import React, { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ClipLoader from "react-spinners/ClipLoader";

interface VideoEmbedProps {
  videoId: string;
  height: string;
  width: string;
  className?: string;
}

function VideoEmbed({ videoId, height, width, className }: VideoEmbedProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // Délai de 1000ms pour le Spinner
    return () => clearTimeout(timeout);
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // Arrête la lecture automatique lors de la préparation
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: `${height}`,
    width: `${width}`,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={`video-embed-container relative w-full ${className || ""}`}>
      {/* Vidéo YouTube */}
      <YouTube
        className="video-embed w-full"
        videoId={videoId}
        opts={opts}video-embed
        onReady={onPlayerReady}
      />
      {/* Spinner superposé */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <ClipLoader color="#f6f1f1" loading size={50} />
        </div>
      )}
    </div>
  );
}

export default VideoEmbed;
