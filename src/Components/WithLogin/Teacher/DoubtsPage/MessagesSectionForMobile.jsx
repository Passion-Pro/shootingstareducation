import React from 'react';
import styled from "styled-components"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from "react-router-dom";
import HeaderMain from "../../Header/HeaderMain";
import Doubt from "../../DoubtsPage/Doubt";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useStateValue } from "../../../../StateProvider";
import DoubtReplies from "../../DoubtsPage/DoubtReplies";

function MessagesSectionForMobile() {
    const [{ openDoubtReplies }, dispatch] = useStateValue();
    const history = useHistory();
    const back_to_previous_page = () => {
      history.goBack();
    }
    return (
        <>
        <Container>
          <div className="messages_section_header">
          <ArrowBackIcon className="arrowBack_icon" onClick = {back_to_previous_page}/>
          <p>Ronak</p>
          </div>
          {openDoubtReplies === false ? (
              <div className="messages_section_messages">
                <Doubt />
                <Doubt />
                <Doubt />
                <Doubt />
              </div>
            ) : (
              <DoubtReplies />
            )}
          <div className="messages_section_footer">
          <div className="send_Message_box">
                <input type="text" placeholder="Type a message " />
                <div className="icons">
                  <AttachFileIcon className="attach_file_icon icon" />
                  <InsertEmoticonIcon className="emoji_icon icon" />
                  <SendIcon className="send_icon icon" />
                </div>
              </div>
          </div>
        </Container>
        </>
    )
};

const Container  = styled.div`
 display: flex;
 flex-direction: column;
 height : 100vh;

 .messages_section_header{
    display : flex;
    justify-content : space-between;
    border-bottom: 1px solid lightgray;
    padding : 10px;
    p{
        width :100%;
        text-align : left;
        margin-bottom : 0px;
        font-size : 22px;
        margin-left : 20px;
        font-weight : bold;
    } 

    .arrowBack_icon{
       margin-top : 5px; 
    }
 }

 .messages_section_messages{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: #5094ee;
 }
`;

export default MessagesSectionForMobile
