import React from "react";
import LastSeen from "../video_index/react_time_ago";
import { withRouter } from "react-router";

const RightSidebarItem = (props) => {
  const video = props.video;
  const user = props.user;

  const handleClick = () => {
    props.history.push(`/videos/${video.id}`);
  };

  let username;
  if (user) {
    username = (
      <h2>
        {user.first_name} {user.last_name}
      </h2>
    );
  }

  return (
    <div onClick={handleClick} className="rightsidebar-item">
      <video className="thumbnail">
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="thumb-info-right">
        <h1 className="thumb-title">{video.title}</h1>

        <div className="username">{username}</div>
        <div className="views-right">{video.views} views</div>
      </section>
    </div>
  );
};

export default withRouter(RightSidebarItem);
