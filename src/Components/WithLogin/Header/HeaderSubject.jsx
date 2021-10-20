import React from "react";
import { actionTypes } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";

function HeaderSubject({ subject, course }) {
  const [{ signInAs, user, course_Subject, course_Main }, dispatch] =
    useStateValue();
  function selectSubject() {
    dispatch({
      type: actionTypes.SET_COURSE,
      course_Subject: subject,
    });
    dispatch({
      type: actionTypes.SET_COURSE_MAIN,
      course_Main: course,
    });
  }
  console.log("yo", course_Main, course_Subject);
  return (
    <div>
      <div onClick={selectSubject}>{subject}</div>
    </div>
  );
}

export default HeaderSubject;
