import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import HeaderMain from "../../Header/HeaderMain";
import Doubt from "../../DoubtsPage/Doubt";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DoubtReplies from "../../DoubtsPage/DoubtReplies";
import { useStateValue } from "../../../../StateProvider";
import { actionTypes } from "../../../../reducer";
import db from "../../../../firebase";
import firebase from "firebase";

function MessagesSectionForMobile() {
  const [
    {
      openDoubtReplies,
      user,
      signInAs,
      teacherCourseId,
      teacherSubjectId,
      userCourseId,
      userSubjectId,
      chatName,
    },
    dispatch,
  ] = useStateValue();
  const [rooms, setRooms] = useState([]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (
      user &&
      teacherCourseId &&
      teacherSubjectId
    ) {
      console.log(teacherCourseId);

      setInput("");

      db.collection("Courses")
        .doc(teacherCourseId)
        .collection("Subjects")
        .doc(teacherSubjectId)
        .collection("doubtRooms")
        .onSnapshot((snapshot) =>
          setRooms(
            snapshot.docs.map((doc) => ({
              data: doc.data(),
            }))
          )
        );
    }
  }, [
    user,
    teacherCourseId,
    teacherSubjectId,
    userCourseId,
    userSubjectId,
    messages.length,
  ]);
   
  useEffect(() => {
    if(user && teacherCourseId && teacherSubjectId && chatName){
      db.collection("Courses")
    .doc(teacherCourseId)
    .collection("Subjects")
    .doc(teacherSubjectId)
    .collection("doubtRooms")
    .where("name", "==", chatName)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        db.collection("Courses")
          .doc(teacherCourseId)
          .collection("Subjects")
          .doc(teacherSubjectId)
          .collection("doubtRooms")
          .doc(doc.id)
          .collection("messages")
          .orderBy("timestamp", "asc")
          .onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc) => doc.data()))
          );
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
    }
  }, [chatName])
  const back_to_previous_page = () => {
    history.goBack();
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if(input!== "")
    { 
      console.log(signInAs);
      console.log(input);
      if (chatName && input) {
  
        db.collection("students")
          .where("name", "==", chatName)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              console.log(signInAs)
              db.collection("students")
                .doc(doc.id)
                .collection("courses")
                .where("name", "==", signInAs.courseName)
                .get()
                .then((querySnapshot) => {
                  querySnapshot.forEach((doc1) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc1.id, " => ", doc1.data());
  
                    db.collection("students")
                      .doc(doc.id)
                      .collection("courses")
                      .doc(doc1.id)
                      .collection("subjects")
                      .where("name", "==", signInAs.courseSubject)
                      .get()
                      .then((querySnapshot) => {
                        querySnapshot.forEach((doc2) => {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc2.id, " => ", doc2.data());
                          console.log("REACHED" , doc.id , doc1.id , doc2.id)

                          db.collection("students")
                            .doc(doc.id)
                            .collection("courses")
                            .doc(doc1.id)
                            .collection("subjects")
                            .doc(doc2.id)
                            .collection("messagesToTeacher")
                            .add({
                              name: chatName,
                              message: input,
                              timestamp:
                                firebase.firestore.FieldValue.serverTimestamp(),
                            });
                        });
                      });
                  });
                });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
          db.collection("Courses")
            .doc(teacherCourseId)
            .collection("Subjects")
            .doc(teacherSubjectId)
            .collection("doubtRooms")
            .where("name", "==", chatName)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
  
                db.collection("Courses")
                  .doc(teacherCourseId)
                  .collection("Subjects")
                  .doc(teacherSubjectId)
                  .collection("doubtRooms")
                  .doc(doc.id)
                  .collection("messages")
                  .add({
                    name: chatName,
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  });
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });

        setInput("");
      }
    }
  };


  return (
    <>
      <Container>
        <div className="messages_section_header">
          <ArrowBackIcon
            className="arrowBack_icon"
            onClick={back_to_previous_page}
          />
          <p>{chatName}</p>
        </div>
        <div className="messages_section_messages">
          {messages.map((message) => (
            <Doubt
              name={message.name}
              message={message.message}
              timestamp={message.timestamp}
            />
          ))}
        </div>
        <div className="messages_section_footer">
          <div className="send_Message_box">
            <input type="text" placeholder="Type a message "  value={input}
                  onChange={(e) => setInput(e.target.value)}/>
            <div className="icons">
              <AttachFileIcon className="attach_file_icon icon" />
              <InsertEmoticonIcon className="emoji_icon icon" />
              <SendIcon className="send_icon icon"  onClick={sendMessage}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .messages_section_header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 10px;
    p {
      width: 100%;
      text-align: left;
      margin-bottom: 0px;
      font-size: 22px;
      margin-left: 20px;
      font-weight: bold;
    }

    .arrowBack_icon {
      margin-top: 5px;
    }
  }

  .messages_section_messages {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: #5094ee;
    padding-bottom : 10px;
  }

  .messages_section_footer{
    border-top : 1px solid gray;
  }
`;

export default MessagesSectionForMobile;
