import { connect } from "react-redux";
import SignUp from "./signup_form";
import { login, receiveErrors } from "../../actions/session_actions";

const msp = (state, ownProps) => {
  const errors = [];
  const formType = "Login";

  return { errors, formType };
};

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  receiveErrors: (error) => dispatch(receiveErrors(error)),
});

export default connect(msp, mdp)(SignUp);
