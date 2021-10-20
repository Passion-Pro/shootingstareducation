import React, { useState } from "react";
import "./Chat.css";
import SendIcon from "@mui/icons-material/Send";import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router";import AttachFileIcon from "@mui/icons-material/AttachFile";
import db from "../../../firebase";
import Chatmsg from "./Chatmsg";
import { useStateValue } from "../../../StateProvider";

function Chat() {
  const [{user},dispatch]=useStateValue();
  const [input, setInput] = useState("");
  const history=useHistory()
  var today = new Date();
  var dateC=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  // const sendMessage=()=>{
  //       db.collection("course").doc().collection(course).doc().collection(course_Subject).doc().collection('chat').add({
  //         message:message,
  //         name:user?.email,
  //         date:dateC,
  //       })
  // }
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
          <div className={false?"chat__msgBox":"chat__msgBoxNot"}>
          <Chatmsg/>
          </div>
      </div>
      <div className="doubtBox_footer">
            <div className="send_Message_box">
              <input type="text" placeholder="Type a message " />
              <div className="icons">
                <AttachFileIcon className="attach_file_icon icon" />
                <SendIcon className="send_icon icon" />
              </div>
            </div>
          </div>
    </div>
  );
}

export default Chat;
