import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../../../StateProvider";
import CloseIcon from "@mui/icons-material/Close";
import { actionTypes } from "../../../reducer";
import { useHistory } from "react-router-dom";
import db from "../../../firebase";

function VewAssignmentPopup() {
  const [
    {
      openViewAssignmentPopup,
      assignmentStudentDetails,
      userSubjectId,
      userCourseId,
      user,
    },
    dispatch,
  ] = useStateValue();
  const [submittedAssignmentUrl, setSubmittedAssignmentUrl] = useState();
  const [correctedAssignmentUrl, setCorrectedAssignmentUrl] = useState();

  useEffect(() => {
    if (
      user &&
      userCourseId &&
      userSubjectId &&
      assignmentStudentDetails?.name
    ) {
      db.collection("students")
        .doc(user.uid)
        .collection("courses")
        .doc(userCourseId)
        .collection("subjects")
        .doc(userSubjectId)
        .collection("assignments")
        .where("name", "==", assignmentStudentDetails?.name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setSubmittedAssignmentUrl(doc.data().answerUrl);
            setCorrectedAssignmentUrl(doc.data().correctedAssignmentUrl);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, [
    user,
    userCourseId,
    userSubjectId,
    submittedAssignmentUrl,
    correctedAssignmentUrl,
    assignmentStudentDetails,
  ]);

  const close_assignment_details = () => {
    dispatch({
      type: actionTypes.OPEN_VIEW_ASSIGNMENT_POPUP,
      openViewAssignmentPopup: false,
    });
    dispatch({
      type: actionTypes.SET_ASSIGNMENT_STUDENT_DETAILS,
      assignmentStudentDetails: [],
    });
  };

  return (
    <>
      {openViewAssignmentPopup === true && (
        <Container>
          <div className="view_assignment">
            <div className="assignment_details_close">
              <p className="assignment_details_title">
                {assignmentStudentDetails?.name}
              </p>
              <CloseIcon
                className="assignment_details_close_icon"
                onClick={close_assignment_details}
              />
            </div>
            <p className="assignment_details_description">
              {assignmentStudentDetails?.description}
            </p>
            <div className="assignment_attatched">Ronak.pdf</div>
            <p className="submitted_assignment">Submitted Assignment:</p>
            <div className="assigment_submitted">
              <a href={submittedAssignmentUrl}>Ronak.pdf</a>
              <div className="marks_container">
                <p>Marks:</p>
                <span>65</span>
              </div>
              <div className="corrected_assignment assignment_submitted">
                <p>Assignment Returned:</p>
                <a href={correctedAssignmentUrl}>Ronak.pdf</a>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: #858484cc;
  display: flex;
  justify-content: center;
  animation: fadeIn 0.7s;

  .view_assignment {
    background-color: #fff;
    width: 450px;
    height: fit-content;
    margin: auto;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.24);
    padding: 10px;
  }

  .assignment_details_close {
    display: flex;
    justify-content: space-between;
    p {
      width: 100%;
      text-align: center;
    }
  }

  .assignment_details_close_icon {
    &:hover {
      color: #6d6969;
      cursor: pointer;
    }
  }

  .assignment_attatched {
    background-color: lightgray;
    padding: 7px;
    padding-left: 15px;
    width: 90%;
    border-radius: 10px;
  }

  .submitted_assignment {
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .assignment_submitted {
    font-size: 15px;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }

  .marks_container {
    display: flex;
    margin-top: 10px;
    span {
      margin-left: 3px;
    }
    p {
      margin-bottom: 0px;
    }
  }

  .corrected_assignment {
    margin-top: 10px;
    p {
      margin-bottom: 0px;
    }
  }
`;

export default VewAssignmentPopup;
