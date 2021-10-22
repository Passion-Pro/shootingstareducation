
export const initialState = {
  openSignInPopup: false,
  user: null,
  signInAs: null,
  openAsignmentPopup: false,
  openNoticesPopup: false,
  openDoubtReplies: false,
  course_Subject: null,
  course_SubjectID:null,
  course_Main: null,
  course_MainID:null,
  openAskDoubtPopup: false,
  teacher:null,
  teacherSubjectId:null,
  teacherCourseId:null,
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
  SET_COURSE_ID:"SET_COURSE_ID",
  SET_COURSE_MAIN: "SET_COURSE_MAIN",
  SET_COURSE_MAIN_ID:"SET_COURSE_MAIN_ID",
  SET_TEACHER:'SET_TEACHER',
  SET_TEACHER_COURSE_ID:'SET_TEACHER_COURSE_ID',
  SET_TEACHER_SUBJECT_ID:'SET_TEACHER_SUBJECT_ID',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_TEACHER_SUBJECT_ID:
      return {
        ...state,
        teacherSubjectId: action.teacherSubjectId,
      };
      case actionTypes.SET_TEACHER_COURSE_ID:
      return {
        ...state,
        teacherCourseId: action.teacherCourseId,
      };
      case actionTypes.SET_COURSE_ID:
      return {
        ...state,
        course_SubjectID: action.course_SubjectID,
      };
      case actionTypes.SET_TEACHER:
      return {
        ...state,
        teacher: action.teacher,
      };
      case actionTypes.SET_COURSE_MAIN_ID:
      return {
        ...state,
        course_MainID: action.course_MainID,
      };
      case actionTypes.SET_COURSE:
      return {
        ...state,
        course_Subject: action.course_Subject,
      };
    case actionTypes.SET_COURSE_MAIN:
      return {
        ...state,
        course_Main: action.course_Main,
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
      }
    case actionTypes.OPEN_ASSIGNMENT_POPUP:
      return {
        ...state,
        openAsignmentPopup: action.openAsignmentPopup,
      }
    case actionTypes.OPEN_NOTICES_POPUP:
      return {
        ...state,
        openNoticesPopup: action.openNoticesPopup,
      }
    case actionTypes.OPEN_DOUBT_REPLIES:
      return {
        ...state,
        openDoubtReplies: action.openDoubtReplies,
      }
    case actionTypes.OPEN_ASKDOUBT_POPUP:
      return {
        ...state,
        openAskDoubtPopup: action.openAskDoubtPopup,
      }
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state;
  }
};

export default reducer;
