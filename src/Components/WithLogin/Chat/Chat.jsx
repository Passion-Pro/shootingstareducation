import React, { useState } from "react";
import "./Chat.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Chat() {
  const [input, setInput] = useState("");
  const user=true;
  const sendMessage=()=>{

  }
  return (
    <div className="chat">
      <div className="chat__header">
       <div className="chat__headerFirst">
         <div className="chat__headerFirst__back">
            <ArrowBackIcon />
         </div>
         <div className="chat__headerFirst__Fotu">
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
      <div className="chat__input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message ... "
        />
        <SendRoundedIcon id="send" fontSize="large" onClick={sendMessage}/>
      </div>
    </div>
  );
}

export default Chat;
