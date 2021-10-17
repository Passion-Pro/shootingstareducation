import React, { useState } from "react";
import "./Chat.css";
import SendIcon from "@mui/icons-material/Send";import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router";import AttachFileIcon from "@mui/icons-material/AttachFile";
import db from "../../../firebase";

function Chat() {
  const [input, setInput] = useState("");
  const user=true;
  const history=useHistory()
  const sendMessage=()=>{
        // db.collection(course)
  }
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
          <div className={user?"chat__msgBox":"chat__msgBoxNot"}>
          <div className="chat__message__my">
              <h6>name</h6>
              <div className="chat__message_div">
              <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sed reiciendis voluptates illo exercitationem officiis voluptatum atque numquam ea porro dolorem non dolore consequuntur neque, modi nam quidem dolor expedita?
              </h5>
              <p>13-10-2021</p>
              </div>
              </div>
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
