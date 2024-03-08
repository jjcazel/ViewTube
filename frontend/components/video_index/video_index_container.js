import { connect } from "react-redux";
import VideoIndex from "./video_index";
import VideoSearchIndex from "./video_search_index";
import { fetchVideos } from "../../actions/video_actions";
import { fetchUsers } from "../../actions/users_actions";

const msp = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    search: state.ui.search,
  };
};

const mdp = (dispatch) => ({
  fetchVideos: (search) => dispatch(fetchVideos(search)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export const VideoIndexContainer = connect(msp, mdp)(VideoIndex);
export const VideoSearchIndexContainer = connect(msp, mdp)(VideoSearchIndex);
