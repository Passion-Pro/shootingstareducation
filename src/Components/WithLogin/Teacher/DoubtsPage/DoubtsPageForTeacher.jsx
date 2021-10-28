import React , {useState , useEffect} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../../StateProvider";
import { actionTypes } from "../../../../reducer";
import "./DoubtsPageForTeacher.css";
import StudentName from "./StudentName";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Doubt from "../../DoubtsPage/Doubt";
import DoubtReplies from "../../DoubtsPage/DoubtReplies";
import db from "../../../../firebase";
import HeaderTeacher from "../HeaderTeacher/HeaderTeacher";

function DoubtsPageForTeacher() {
  const [{ openDoubtReplies ,  course_MainID,
    course_SubjectID  }, dispatch] = useStateValue();
  const[rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("Courses")
    .doc(course_MainID)
    .collection("Subjects")
    .doc(course_SubjectID)
    .collection("doubtRooms")
    .onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    );
  } ,[])
  return (
    <div className="doubtsPageforTeacher">
      <HeaderTeacher/>
      <Container>
        <DoubtBox>
          <div className="student_names">
            <p className="names_heading">Students</p>
            <div className="names_div">
              <StudentName />
              <StudentName />
              <StudentName />
            </div>
          </div>
          <div className="doubt_section">
            <div className="doubt_section_header">
              <p>Ronak</p>
            </div>
            {openDoubtReplies === false ? (
              <div className="doubt_section_doubts_messages">
                <Doubt />
                <Doubt />
                <Doubt />
                <Doubt />
              </div>
            ) : (
              <DoubtReplies />
            )}
            <div className="doubtBox_footer">
              <div className="send_Message_box">
                <input type="text" placeholder="Type a message " />
                <div className="icons">
                  <AttachFileIcon className="attach_file_icon icon" />
                  <InsertEmoticonIcon className="emoji_icon icon" />
                  <SendIcon className="send_icon icon" />
                </div>
              </div>
            </div>
          </div>
        </DoubtBox>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  padding-top: 20px;
  justify-content: space-around;
  height: 88vh;

  @media (max-width: 600px) {
    padding: 10px;
    padding-bottom: 15px;
  }
`;

const DoubtBox = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid lightgray;
  height: 100%;
  height: fixed;

  .student_names {
    flex: 0.3;
    border-right: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px) {
      flex: 1;
    }
  }

  .names_heading {
    padding-left: 20px;
    padding-top: 5px;
    font-size: 20px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
    margin-bottom: 0px;
  }

  .doubt_section {
    flex: 0.7;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px) {
      display: none;
    }
  }

  .doubt_section_header {
    p {
      padding-left: 20px;
      font-size: 20px;
      border-bottom: 1px solid lightgray;
      padding-bottom: 5px;
      margin-bottom: 0px;
      padding-top: 5px;
    }
  }

  .doubt_section_doubts_messages {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: #5094ee;
  }
`;

export default DoubtsPageForTeacher;
