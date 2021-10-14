export const initialState = {
  openSignInPopup: false,
  user : null,
  signInAs : null,
  openAsignmentPopup : false,
  openNoticesPopup : false,
};

export const actionTypes = {
  OPEN_SIGNINPOPUP: "OPEN_SIGNINPOPUP",
  SET_USER : "SET_USER",
  SIGN_IN_AS : "SIGN_IN_AS",
  OPEN_ASSIGNMENT_POPUP : "OPEN_ASSIGNMENT_POPUP",
  OPEN_NOTICES_POPUP : "OPEN_NOTICES_POPUP"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.OPEN_SIGNINPOPUP:
      return {
        ...state,
        openSignInPopup: action.openSignInPopup,
      };
    case actionTypes.SIGN_IN_AS:
        return{
            ...state,
            signInAs: action.signInAs,
        }
    case actionTypes.OPEN_ASSIGNMENT_POPUP:
      return{
        ...state,
        openAsignmentPopup : action.openAsignmentPopup,
      }
    case actionTypes.OPEN_NOTICES_POPUP:
      return{
        ...state,
        openNoticesPopup : action.openNoticesPopup,
      }

    default:
      return state;
  }
};

export default reducer;
