import React from "react";
import VideoPlayer from "./VideoPlayer";
import "video.js/dist/video-js.css";

export default function VideoRoute() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("wating", () => {
      videojs.log("player is wating");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <div>
      <h1 className="text-4xl">Videoサンプル</h1>
      <h2>通常のVideoタグで実装(mp4)</h2>
      <video controls width={800}>
        <source src="/oceans.mp4" type="video/mp4" />
      </video>
      <h2 className="text-4xl">Video.jsを使った実装(HLS)</h2>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}
