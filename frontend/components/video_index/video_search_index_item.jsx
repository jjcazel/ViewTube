import React from "react";
import { withRouter } from "react-router";
import LastSeen from "./react_time_ago";

const VideoSearchIndexItem = (props) => {
  const video = props.video;
  const user = props.user;

  const handleClick = () => {
    props.history.push(`/videos/${video.id}`);
  };

  let username;
  if (user) {
    username = (
      <h2 className="username-search">
        {user.first_name} {user.last_name}
      </h2>
    );
  }

  return (
    <main onClick={handleClick} className="index-item-search">
      <video width="250" height="140" className="thumbnail-2-search">
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="thumb-info-search">
        <h1 className="thumb-title-search">{video.title}</h1>
        <section className="date-index-views-cont-search">
          <div>{username}</div>
          <div className="views-search">{video.views} views</div>
          <div className="date-index-search">{<LastSeen video={video} />}</div>
        </section>
        <div className="views-search-2">{video.description}</div>
      </div>
    </main>
  );
};

export default withRouter(VideoSearchIndexItem);
