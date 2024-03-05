import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/ui_actions";
import SideBarModal from "./sidebar_modal";

const msp = (state) => {
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    expand: state.ui.expand,
    modal: state.ui.modal,
  };
};

const mdp = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(SideBarModal);
