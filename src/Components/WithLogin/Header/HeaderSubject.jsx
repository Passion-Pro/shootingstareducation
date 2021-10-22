import React from "react";
import db from "../../../firebase";
import { actionTypes } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";

function HeaderSubject({ subject, course }) {
  const [{ signInAs, user, course_Subject, course_Main, course_SubjectID,course_MainID}, dispatch]=useStateValue();
  const selectSubject=()=> {
    dispatch({
      type: actionTypes.SET_COURSE,
      course_Subject: subject,
    });
    dispatch({
      type: actionTypes.SET_COURSE_MAIN,
      course_Main: course,
    });
    if(subject){
      console.log("objectobjectobject",course)
        db.collection("Courses")
        .where("name", "==",course)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log("doc?.id",doc?.id)
            dispatch({
              type:actionTypes.SET_COURSE_MAIN_ID,
              course_MainID:doc.id,
            })
            db.collection("Courses").doc(doc.id).collection('Subjects')
            .where("name", "==",subject)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc1) => {
                dispatch({
                    type:actionTypes.SET_COURSE_ID,
                    course_SubjectID:doc1.id,
                })
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      }
      }
  
  console.log("object",course_SubjectID,course_Main,course_Subject,course_MainID)
  return (
    <div>
      <div onClick={selectSubject}>{subject}</div>
    </div>
  );
}

export default HeaderSubject;
