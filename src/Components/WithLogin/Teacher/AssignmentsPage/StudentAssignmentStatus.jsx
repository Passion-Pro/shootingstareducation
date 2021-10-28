import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CancelIcon from '@mui/icons-material/Cancel';
import db from "../../../../firebase"
import {useHistory} from "react-router-dom";
import { actionTypes } from "../../../../reducer";
import { useStateValue } from "../../../../StateProvider";

function StudentAssignmentStatus({name , answerUrl , fileName}) {
  const [submissiondetails, setSubmissionDetails] = useState(false);
  const history = useHistory();
  const[{} , dispatch] = useStateValue();
  

  useEffect(() => {}, [submissiondetails]);
  const view_details = (e) => {
    e.preventDefault();
    setSubmissionDetails(true);
  };

  const close_details = (e) => {
    e.preventDefault();
    setSubmissionDetails(false);
  };

  const goToUploadPage = (e) => {
    e.preventDefault();
    history.push("/uploadCorrectedAssignmentPage");
    dispatch({
      type : actionTypes.SET_STUDENT_NAME,
      studentName :  name
    })

  }
  return (
    <>
      <Container>
        <p className = "student_name">{name}</p>
        {submissiondetails === false ? (
          <span onClick={view_details}>View details</span>
        ) : (
          <div className="submission_details">
            <div className="submission_details_close">
            <p className = "submitted_assignment">Submitted Assignment:</p>
                <CancelIcon className="cancel_icon" onClick = {close_details}/>
            </div>
             <div className="submitted_assignment_name">
                 <a href={answerUrl}>
                 {fileName}
                 </a>
             </div>
             <button onClick = {goToUploadPage}>Upload corrected assignment</button>
          </div>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #e4e4e4;
  .student_name{
    margin-bottom: 0px;
  }
  span {
    font-size: 12px;
    color: blue;
    font-style: italic;
    &:hover {
      cursor: pointer;
      color: black;
    }
  }
  .submission_details{
     display: flex;
     flex-direction : column;
     background-color: white;
     padding : 5px;
     margin-top : 5px;
     border-radius : 5px;

     .submitted_assignment{
         font-size: 12px;
         margin-bottom: 0px;
     }

    .submitted_assignment_name{
        font-size : 15px;
      
        &:hover {
           color : blue;
           cursor: pointer;
       }
     }

     button{
         width : fit-content;
         font-size : 13px;
         margin-left : auto;
         margin-right : auto;
         margin-top : 10px;
         margin-bottom : 5px;
         background-color : #1183e0;
         color : white;
         border-radius : 15px;
         &:hover{
              cursor : pointer;
              background-color : #63b3f5;
          }
     }

     .submission_details_close{
         display : flex;
         justify-content : space-between;
     }

     .cancel_icon{
     font-size : 19px;
     &:hover{
         cursor : pointer;
         color : #6d6969;
     }
     }

     .marks{
         display : flex;
         justify-content : space-between;
         width :90%;
         p{
             font-size : 14px;
         }
         input{
             height : 25px;
             border-radius : 5px;
             border : 1px solid gray;
             outline-width: 0px;
             padding-left: 8px;
             padding-top : 3px;
             padding-bottom :3px;
         }
     }
  }
`;

export default StudentAssignmentStatus;
