export const initialState = {
  openSignInPopup: false,
  user : null,
  signInAs : null,
};

export const actionTypes = {
  OPEN_SIGNINPOPUP: "OPEN_SIGNINPOPUP",
  SET_USER : "SET_USER",
  SIGN_IN_AS : "SIGN_IN_AS",
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

    default:
      return state;
  }
};

export default reducer;
