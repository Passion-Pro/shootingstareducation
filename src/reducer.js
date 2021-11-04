export const initialState = {
  openSignInPopup: false,
  user: null,
  signInAs: null,
  openAsignmentPopup: false,
  openNoticesPopup: false,
  openDoubtReplies: false,
  openAskDoubtPopup: false,
  openAssignmentPopupForTeacher: false,
  openCreateAssignmentPopup : false,
  course_Subject: null,
  course_SubjectID:null,
  course_Main: null,
  course_MainID:null,
  openAskDoubtPopup: false,
  userInfo : [],
  userCourseId : null,
  userSubjectId : null,
  teacher:null,
  teacherSubjectId:null,
  teacherCourseId:null,
  newteachercourse:null,
  studentcourse:null,
  newteachercoursesubject:null,
  adduser:null,
  studentcoursesubject:[],
  chatName : null,
  assignmentStudentDetails : [],
  studentName : null,
  openViewAssignmentPopup : false,
  createAssignmentDetails : [],
  studentAssignmentName : null,
};

export const actionTypes = {
  SET_ADD_USER:'SET_ADD_USER',
  OPEN_SIGNINPOPUP: "OPEN_SIGNINPOPUP",
  SET_USER: "SET_USER",
  SIGN_IN_AS: "SIGN_IN_AS",
  OPEN_ASSIGNMENT_POPUP: "OPEN_ASSIGNMENT_POPUP",
  OPEN_NOTICES_POPUP: "OPEN_NOTICES_POPUP",
  OPEN_DOUBT_REPLIES: "OPEN_DOUBT_REPLIES",
  OPEN_ASKDOUBT_POPUP: "OPEN_ASKDOUBT_POPUP",
  SET_COURSE: "SET_COURSE",
  SET_COURSE_SUBJECT_ID:"SET_COURSE_SUBJECT_ID",
  OPEN_ASSIGNMENT_POPUP_FOR_TEACHER: "OPEN_ASSIGNMENT_POPUP_FOR_TEACHER",
  OPEN_CREATE_ASSIGNMENT_POPUP : "OPEN_CREATE_ASSIGNMENT_POPUP",
  SET_COURSE_MAIN: "SET_COURSE_MAIN",
  SET_USER_INFO : "SET_USER_INFO",
  SET_USER_COURSEID : "SET_USER_COURSEID",
  SET_USER_SUBJECTID : "SET_USER_SUBJECTID",
  SET_COURSE_MAIN_ID:"SET_COURSE_MAIN_ID",
  SET_TEACHER:'SET_TEACHER',
  SET_TEACHER_COURSE_ID:'SET_TEACHER_COURSE_ID',
  SET_TEACHER_SUBJECT_ID:'SET_TEACHER_SUBJECT_ID',
  SET_NEW_TEACHER_COURSE:'SET_NEW_TEACHER_COURSE',
  SET_NEW_TEACHER_COURSE_SUBJECT:'SET_NEW_TEACHER_COURSE_SUBJECT',
  SET_STUDENT_COURSE:'SET_STUDENT_COURSE',
  SET_STUDENT_COURSE_SUBJECT:'SET_STUDENT_COURSE_SUBJECT',
  SET_CHATNAME : 'SET_CHATNAME',
  SET_ASSIGNMENT_STUDENT_DETAILS : 'SET_ASSIGNMENT_STUDENT_DETAILS',
  SET_STUDENT_NAME : 'SET_STUDENT_NAME',
  OPEN_VIEW_ASSIGNMENT_POPUP : 'OPEN_VIEW_ASSIGNMENT_POPUP',
  CREATE_ASSIGNMENT_DETAILS : 'CREATE_ASSIGNMENT_DETAILS',
  SET_STUDENT_ASSIGNMENT_NAME : 'SET_STUDENT_ASSIGNMENT_NAME',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_STUDENT_COURSE_SUBJECT:
      return {
        ...state,
        studentcoursesubject: action.studentcoursesubject,
      };
    case actionTypes.SET_ADD_USER:
      return {
        ...state,
        adduser: action.adduser,
      };
    case actionTypes.SET_STUDENT_COURSE:
      return {
        ...state,
        studentcourse: action.studentcourse,
      };
    case actionTypes.SET_NEW_TEACHER_COURSE:
      return {
        ...state,
        newteachercourse: action.newteachercourse,
      };
      case actionTypes.SET_NEW_TEACHER_COURSE_SUBJECT:
      return {
        ...state,
        newteachercoursesubject: action.newteachercoursesubject,
      };
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
      case actionTypes.SET_COURSE_SUBJECT_ID:
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
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }
    case actionTypes.SET_USER_INFO:
      return {
         ...state,
         userInfo : action.userInfo,
      }
    case actionTypes.SET_USER_COURSEID:
      return{
        ...state,
        userCourseId : action.userCourseId,
      }
    case actionTypes.SET_USER_SUBJECTID:
      return{
        ...state,
        userSubjectId : action.userSubjectId,
      }
    case actionTypes.SET_CHATNAME:
      return {
        ...state,
        chatName : action.chatName,
      }
    case actionTypes.SET_ASSIGNMENT_STUDENT_DETAILS:
      return {
        ...state,
        assignmentStudentDetails: action.assignmentStudentDetails,
      }
    case actionTypes.SET_STUDENT_NAME:
      return {
        ...state,
        studentName : action.studentName,
      }
    case actionTypes.OPEN_VIEW_ASSIGNMENT_POPUP:
      return{
        ...state,
        openViewAssignmentPopup : action.openViewAssignmentPopup,
      }
    case actionTypes.CREATE_ASSIGNMENT_DETAILS:
       return {
         ...state,
         createAssignmentDetails: action.createAssignmentDetails,
       }
    case actionTypes.SET_STUDENT_ASSIGNMENT_NAME:
      return {
        ...state,
        studentAssignmentName: action.studentAssignmentName,
      }
    default:
      return state;
  }
};

export default reducer;
