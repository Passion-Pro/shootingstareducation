import React from "react";
import styled from "styled-components";
import "./DoubtsPage.css";
import Doubt from "./Doubt";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DoubtReplies from "./DoubtReplies";
import { useStateValue } from "../../../StateProvider";
import Notices from "../Notices/Notices";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../../../reducer";
import NoticePopup from "../Notices/NoticePopup";
import AskDoubtPopup from "./AskDoubtPopup";
import HeaderMain from "../Header/HeaderMain";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DoubtsPage() {
  const [{ openDoubtReplies }, dispatch] = useStateValue();
  const history = useHistory();

  const goToNoticesPage = (e) => {
    e.preventDefault();
    history.push("/NoticesPage");
  };

  const open_noticesPopup = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.OPEN_NOTICES_POPUP,
      openNoticesPopup: true,
    });
  };

  const open_ask_doubt_popup = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.OPEN_ASKDOUBT_POPUP,
      openAskDoubtPopup: true,
    });
  };

  const back_to_previous_page = () => {
    history.goBack();
  }


  return (
    <>
      <div className="dbPage_header">
        <HeaderMain/>
      </div>
      <div className="doubtsPage">
        <div className="upcoming_class">
          <p>Upcoming class at 14:33 on Monday</p>
          <div className="header_buttons">
            <button className="notice_button" onClick={open_noticesPopup}>
              Notices
            </button>
            <button
              className="notice_button_for_mobile"
              onClick={goToNoticesPage}
            >
              Notices
            </button>
          </div>
        </div>
        <Container>
          <DoubtBox>
            <div className="doubtBox_header">
             <div className="doubtBox_header_name">
             <ArrowBackIcon className="arrowBack_icon" onClick = {back_to_previous_page}/>
              <p>Physics</p>
             </div>
              <button
                className="ask_doubt_button"
                onClick={open_ask_doubt_popup}
              >
                Ask a doubt
              </button>
            </div>
            {openDoubtReplies === false ? (
              <div className="doubtBox_doubts">
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
          </DoubtBox>
          <div className="notices">
            <Notices />
          </div>
        </Container>
        <NoticePopup />
        <AskDoubtPopup />
      </div>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 50px;
  padding-top: 20px;
  justify-content: space-around;
  .notices {
    flex: 0.3;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    /* margin-top : -50px; */
    flex-direction: column;
    width: fit-content;
    padding-top: 0px;
    button {
      height: 40px;
      border-radius: 10px;
      margin-left: 25px;
      background-color: white;
      &:hover {
        background-color: #80b3f5;
        color: white;
      }
    }
  }

  @media (max-width: 1024px) {
    .notices {
      display: none;
    }
  }

  @media (max-width: 500px) {
    padding: 0px;
  }
`;

const DoubtBox = styled.div`
  flex: 0.7;
  /* padding: 10px; */
  width: 80%;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;

  .doubtBox_header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    /* background-color: darkgray; */
    p {
      text-align: center;
      margin-bottom: 0px;
      font-size: 17px;
      font-weight: 450;
    }
    border-bottom: 1px solid lightgray;
  }

  .doubtBox_doubts {
    /* background-color: #eeeded; */
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: #5094ee;
  }

  .doubtBox_footer {
    background-color: #fff;
    width: 100%;
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
  }

  .send_Message_box {
    width: 100%;
    height: 100%;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    padding: 5px;
    input {
      border: 0;
      outline-width: 0px;
      width: 100%;
      padding: 5px;
      height: 50%;
    }
  }

  .send_icon {
    margin-left: 10px;
  }

  .icons {
    display: flex;
    justify-content: flex-end;
    margin-left: 5px;
  }

  .icon {
    font-size: 18px;
    &:hover {
      cursor: pointer;
      color: #6d6969;
    }
  }

  @media (max-width: 1024px) {
    flex: 1;
  }
`;

export default DoubtsPage;
