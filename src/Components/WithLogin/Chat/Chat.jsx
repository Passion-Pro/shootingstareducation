import React, { useState,useEffect } from "react";
import "./Chat.css";
import SendIcon from "@mui/icons-material/Send";import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router";import AttachFileIcon from "@mui/icons-material/AttachFile";
import db from "../../../firebase";
import Chatmsg from "./Chatmsg";
import { useStateValue } from "../../../StateProvider";

function Chat() {
  const [{ signInAs, user, course_Subject, course_Main,course_SubjectID,course_MainID }, dispatch] =useStateValue();
  const [input, setInput] = useState("");
  const [messages,setMessages]=useState([]);
  const history=useHistory()
  var today = new Date();
  var dateC=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  const sendMessage=()=>{
        if(course_MainID && course_SubjectID){
          db.collection("Courses").doc(course_MainID).collection("Subjects").doc(course_SubjectID).collection('chat').add({
            message:input,
            name:user?.email,
            date:dateC,
          }).then(()=>{
            setInput('')
          })
        }else{
      alert("Try again ... ")
        }
  }
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
  useEffect(()=>{
    if(course_SubjectID && course_MainID &&  course_Main){
    db.collection("Courses").doc(course_MainID).collection("Subjects").doc(course_SubjectID).collection('chat').onSnapshot((snapshot)=>{
      setMessages(snapshot.docs.map((doc)=>({
        data:doc.data(),
        id:doc.id,
      })))
    })
  }
  },[course_SubjectID,course_MainID, course_Main])
  console.log(course_MainID)
  return (
    <div className="chat">
      <div className="chat__header">
       <div className="chat__headerFirst">
         <div className="chat__headerFirst__back" onClick={()=>history.push('/main')}>
           <IconButton>
            <ArrowBackIcon />
            </IconButton>
         </div>
         <div className="chat__headerFirst__account">
            WEB DEVELOPMENT
         </div>
       </div>
      </div>
      <div className="chat__body">
            {messages.map((message)=>(
          <div className={message.data?.name===user?.email?"chat__msgBox":"chat__msgBoxNot"}>
          <Chatmsg message={message} />
          </div>
            ))}
      </div>
      <div className="doubtBox_footer">
            <div className="send_Message_box">
              <input type="text" placeholder="Type a message... " value={input} onChange={e=>setInput(e.target.value)} />
              <div className="icons">
                <AttachFileIcon className="attach_file_icon icon" />
                <SendIcon className="send_icon icon" onClick={sendMessage}/>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Chat;
