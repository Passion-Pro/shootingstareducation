import React from "react";
import styled from "styled-components";
import {useStateValue} from "../../../StateProvider"
import {actionTypes} from "../../../reducer"
function Doubt() {
  const[{ openDoubtReplies} , dispatch] = useStateValue();

  const open_doubt_replies = (e) => {
      e.preventDefault();
      dispatch({
          type : actionTypes.OPEN_DOUBT_REPLIES,
          openDoubtReplies: true
      })
  }
  return (
    <>
      <Container>
        <div className="doubt">
          <div className="doubt_name">
            <p>Ronak</p>
          </div>
          <div className="doubt_message">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <p className="view_replies" onClick = {open_doubt_replies}>
              View Replies
          </p>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .doubt {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-left: auto;
    margin-top: 10px;
    margin-bottom: 4px;
    width: 300px;
  }

  .doubt_message {
    position: relative;
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    p {
      font-size: 12px;
      padding: 10px;
      margin-bottom: 0px;
      padding-bottom: 4px !important;
    }
  }

  .doubt_name {
    p {
      font-weight: 700;
      font-size: xx-small;
      font-style: italic;
      margin-bottom: 2px;
      margin-top: 0px;
      padding: 0px;
      margin-left: 5px;
    }
  }

  .view_replies{
      font-size : 10px;
      margin-left : 9px;
      /* color : blue; */
      font-style : italic;
      text-decoration : underline;
      margin-top : 2px;
      margin-bottom : 0px;
      &:hover{
          cursor : pointer;
          color : white;
      }

  }

  @media(max-width:500px) {
    width : fit-content;
      .doubt{
          width : 70%;
          height : fit-content;
      }
      .doubt_message{
        width : 100%;
      }
    }
`;

export default Doubt;
