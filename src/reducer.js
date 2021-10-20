export const initialState = {
  openSignInPopup: false,
  user: null,
  signInAs: null,
  openAsignmentPopup: false,
  openNoticesPopup: false,
  openDoubtReplies: false,
  course: null,
  openAskDoubtPopup: false,
  openAssignmentPopupForTeacher: false,
  openCreateAssignmentPopup : false,
};

export const actionTypes = {
  OPEN_SIGNINPOPUP: "OPEN_SIGNINPOPUP",
  SET_USER: "SET_USER",
  SIGN_IN_AS: "SIGN_IN_AS",
  OPEN_ASSIGNMENT_POPUP: "OPEN_ASSIGNMENT_POPUP",
  OPEN_NOTICES_POPUP: "OPEN_NOTICES_POPUP",
  OPEN_DOUBT_REPLIES: "OPEN_DOUBT_REPLIES",
  OPEN_ASKDOUBT_POPUP: "OPEN_ASKDOUBT_POPUP",
  SET_COURSE: "SET_COURSE",
  OPEN_ASSIGNMENT_POPUP_FOR_TEACHER: "OPEN_ASSIGNMENT_POPUP_FOR_TEACHER",
  OPEN_CREATE_ASSIGNMENT_POPUP : "OPEN_CREATE_ASSIGNMENT_POPUP",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_COURSE:
      return {
        ...state,
        course: action.course,
      };
    case actionTypes.OPEN_SIGNINPOPUP:
      return {
        ...state,
        openSignInPopup: action.openSignInPopup,
      };
    case actionTypes.SIGN_IN_AS:
      return {
        ...state,
        signInAs: action.signInAs,
      };
    case actionTypes.OPEN_ASSIGNMENT_POPUP:
      return {
        ...state,
        openAsignmentPopup: action.openAsignmentPopup,
      };
    case actionTypes.OPEN_NOTICES_POPUP:
      return {
        ...state,
        openNoticesPopup: action.openNoticesPopup,
      };
    case actionTypes.OPEN_DOUBT_REPLIES:
      return {
        ...state,
        openDoubtReplies: action.openDoubtReplies,
      };
    case actionTypes.OPEN_ASKDOUBT_POPUP:
      return {
        ...state,
        openAskDoubtPopup: action.openAskDoubtPopup,
      };
    case actionTypes.OPEN_ASSIGNMENT_POPUP_FOR_TEACHER:
      return {
        ...state,
        openAssignmentPopupForTeacher: action.openAssignmentPopupForTeacher,
      };
    case actionTypes.OPEN_CREATE_ASSIGNMENT_POPUP:
      return{
        ...state,
        openCreateAssignmentPopup: action.openCreateAssignmentPopup,
      }

    default:
      return state;
  }
};

export default reducer;
