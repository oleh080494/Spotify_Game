import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt={`Album cover for ${track.title}`}
        style={{ height: "64px", width: "64px" }}
      ></img>
      <div className="ms-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist} </div>
      </div>
    </div>
  );
}
