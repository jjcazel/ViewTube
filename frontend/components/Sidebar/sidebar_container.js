import { connect } from 'react-redux';
import SideBar from './sidebar';

const msp = (state) => {
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    expand: state.ui.expand,
    modal: state.ui.modal,
  };
};


export default connect(msp)(SideBar);