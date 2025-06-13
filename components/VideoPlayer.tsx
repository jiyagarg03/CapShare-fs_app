"use client";

import { cn, createIframeLink } from "@/lib/utils";
//import { useEffect, useRef, useState } from "react";
// import {
//   incrementVideoViews,
//   getVideoProcessingStatus,
// } from "@/lib/actions/video";
// import { initialVideoState } from "@/constants";

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className="video-player">
      <iframe
        src={createIframeLink(videoId)}
        loading="lazy"
        title="Video player"
        style={{ border: 0, zIndex: 50 }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        //  onLoad={() => setState((prev) => ({ ...prev, isLoaded: true }))}
      />
    </div>
  );
};

export default VideoPlayer;
