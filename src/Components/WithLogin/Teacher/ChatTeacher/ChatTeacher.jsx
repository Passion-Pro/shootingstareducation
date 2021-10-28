import React, { useState, useEffect } from "react";
import "./ChatTeacher.css";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useStateValue } from "../../../../StateProvider";
import db from "../../../../firebase";
import ChatmsgTeacher from "./ChatmsgTeacher";
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import { display } from "@mui/system";
function ChatTeacher() {
  const [
    {
      signInAs,
      user,
      course_Subject,
      course_Main,
      teacherSubjectId,
      teacherCourseId,
    },
    dispatch,
  ] = useStateValue();
  const [input, setInput] = useState("");
  const[image,setImage]=useState([])
  const[video,setVideo]=useState([])
  const[doc,setDoc]=useState([])
  const [messages, setMessages] = useState([]);
  const [showTypeFile, setShowTypeFile] = useState(false);
  const history = useHistory();
  var today = new Date();
  var dateC =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const sendMessage = () => {
    if (teacherCourseId && teacherSubjectId && input) {
      db.collection("Courses")
        .doc(teacherCourseId)
        .collection("Subjects")
        .doc(teacherSubjectId)
        .collection("chat")
        .add({
          message: input,
          name: user?.email,
          date: dateC,
        })
        .then(() => {
          setInput("");
        });
    }
  };

  // useEffect(() => {
  //   if (user?.uid) {
  //     db.collection("students")
  //       .doc(user?.uid)
  //       .collection("courses")
  //       .onSnapshot((snapshot) =>
  //         setCoursesArray(
  //           snapshot.docs.map((doc) => ({
  //             data: doc.data(),
  //             id: doc.id,
  //           }))
  //         )
  //       );
  //   }
  // }, [user]);

  useEffect(() => {
    if (teacherSubjectId && teacherCourseId) {
      db.collection("Courses")
        .doc(teacherCourseId)
        .collection("Subjects")
        .doc(teacherSubjectId)
        .collection("chat")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              data: doc.data(),
              id: doc.id,
            }))
          );
        });
    }
  }, [teacherSubjectId, teacherCourseId]);

  const show_typeImage=(e)=>{
    e.preventDefault();
    // setShowTypeFile(!showTypeFile);
  }
  const show_typeVideo=(e)=>{
    e.preventDefault();
    setShowTypeFile(!showTypeFile);
  }
  const show_typeDocument=(e)=>{
    e.preventDefault();
    setShowTypeFile(!showTypeFile);
  }
  const selectFileType = (e) => {
    e.preventDefault();
  };

  console.log(image);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerFirst">
          <div
            className="chat__headerFirst__back"
            onClick={() => history.push("/main")}
          >
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </div>
          <div className="chat__headerFirst__account">
            {signInAs && signInAs?.courseSubject}
          </div>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <div
            className={
              message.data?.name === user?.email
                ? "chat__msgBox"
                : "chat__msgBoxNot"
            }
          >
            <ChatmsgTeacher message={message} />
          </div>
        ))}
      </div>
      <div className="doubtBox_footer">
        <div className="send_Message_box">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="icons">
            <div className={showTypeFile ? "showtypeFile" : "notshowtypeFile"}>
              <div className="show_typeImage">
                <label htmlFor="image">
                <ImageRoundedIcon/>
                </label>
                <input type="file" id={'image'} style={{display:'none'}} value={image} onChange={e=>setImage(e.target.value)} accept="image/git , image/jpeg , image/png"/>
              </div>
              <div className="show_typeVideo" >
              <label htmlFor="video">
              <VideoLibraryRoundedIcon/>
                </label>
                <input type="file" id={'video'} style={{display:'none'}} value={video} onChange={e=>setVideo(e.target.value)} accept="image/mp3 , image/mp4 "/>
              </div>
              <div className="show_typeDocument" >
              <label htmlFor="doc">
              <InsertDriveFileRoundedIcon/>
                </label>
                <input type="file" id={'doc'} style={{display:'none'}} value={doc} onChange={e=>setDoc(e.target.value)} accept="image/pdf , image/html , image/js"/>
              </div>
            </div>
          <AttachFileIcon
              className="attach_file_icon icon"
              onClick={() => {
                setShowTypeFile(!showTypeFile);
              }}
            />
            <SendIcon className="send_icon icon" onClick={sendMessage} />
          </div>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default ChatTeacher;
