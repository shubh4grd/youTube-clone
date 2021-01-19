import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <>
      <div
        className="col-md-12"
        onClick={() => {
          onSelectVideo(video);
        }}
      >
        <div className="row border" style={{ cursor: "pointer" }}>
          <div className="col-md-6">
            <img
              height="80px"
              width="140px"
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
          </div>
          <div className="col-md-6">
            <p>{video.snippet.title}</p>
            <p>{video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoItem;
