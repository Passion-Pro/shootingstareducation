import React , {useState ,  useEffect} from "react";
import styled from "styled-components";
import { useStateValue } from "../../../StateProvider";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { actionTypes } from "../../../reducer";
import {useHistory} from "react-router-dom"

function AssignmentPopup() {
  const [{ openAsignmentPopup , assignmentStudentDetails}, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
     console.log(assignmentStudentDetails)
  } , [assignmentStudentDetails])

  const close_assignment_details = () => {
    dispatch({
      type: actionTypes.OPEN_ASSIGNMENT_POPUP,
      openAsignmentPopup: false,
    });
    dispatch({
      type : actionTypes.SET_ASSIGNMENT_STUDENT_DETAILS,
      assignmentStudentDetails : []
  })
  };
  return (
    <>
      {openAsignmentPopup === true && (
        <Container>
          <div className="assignment_details">
            <div className="assignment_details_close">
              <CloseIcon
                className="assignment_details_close_icon"
                onClick={close_assignment_details}
              />
            </div>
            <p className="assignment_details_title">{assignmentStudentDetails?.name}</p>
            <p className="assignment_details_description">
              {assignmentStudentDetails?.description}
            </p>
            <div className="attach_assignment">
              <AttachFileIcon className="attach_file_icon" />
              <p onClick = { e => history.push("/submitAssignment")}>Attatch file</p>
            </div>
            <div className="assignment_attatched">Ronak.pdf</div>
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

  .assignment_details {
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
    justify-content: flex-end;
  }

  .assignment_details_close_icon {
    &:hover {
      color: #6d6969;
      cursor: pointer;
    }
  }
  .assignment_details_title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 0px;
  }

  .assignment_details_description {
    font-size: 13px;
    padding: 10px;
    margin-bottom: 5px;
    margin-left: 15px;
  }

  .attach_assignment {
    display: flex;
    margin-left: 15px;
    p {
      text-decoration: underline;
      font-size: 15px;
      font-style: italic;
      &:hover {
        color: blue;
        cursor: pointer;
      }
    }
  }

  .attach_file_icon {
    color: blue;
    font-style: italic;
    font-size: 21px;
  }

  .assignment_attatched {
    margin-left: 15px;
    background-color: lightgray;
    padding: 7px;
    padding-left: 15px;
    width: 90%;
    border-radius: 10px;
  }

  .assignment_submit {
    margin: 15px;
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-end;
    button {
      width: 80px;
      height: 40px;
      border-radius: 20px;
      background-color: #1183e0;
      color: white;

      &:hover {
        cursor: pointer;
        background-color: #63b3f5;
      }
    }
  }

  @media (max-width: 800px) {
    .assignment_details {
      width: 50vw;
    }
  }

  @media (max-width: 600px) {
    .assignment_details {
      width: 80vw;
    }
  }
`;

export default AssignmentPopup;
