import React from 'react'
import styled from "styled-components"
import {useStateValue} from "../../../StateProvider"
import CloseIcon from "@mui/icons-material/Close"
import {actionTypes} from "../../../reducer"


function AskDoubtPopup() {
    const[{openAskDoubtPopup} , dispatch] = useStateValue(); 

    const close_askDoubt_popup = () => {
        dispatch({
            type : actionTypes.OPEN_ASKDOUBT_POPUP,
            openAskDoubtPopup : false
        })
    }
    return (
        <>
       {openAskDoubtPopup === true && (
        <Container>
          <div className="askDoubtPopup">
            <div className="askDoubtPopup_close">
                <CloseIcon className = "close_icon" onClick = {close_askDoubt_popup}/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Type your doubt"></textarea>
            <div className="ask_doubt_button">
              <button>Ask</button>
          </div>
          </div>
        </Container>
       )}
       </>
    )
};

const Container  = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: #858484cc;
  display: flex;
  justify-content: center;
  animation: fadeIn 0.7s;

  .askDoubtPopup{
    background-color: #fff;
    width: 450px;
    height: fit-content;
    margin: auto;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.24);
    padding: 10px;

    @media(max-width:500px){
      width : 80vw;
    }

    textarea {
      width: 90%;
      outline-width: 0px;
      font-size: 13px;
      resize: none;
      border: 0px;
    }

    .ask_doubt_button{
        display: flex;
        justify-content : flex-end;

        button{
            width : 80px;
            border-radius :  20px;
            background-color : #1183e0;
          color : white;

          &:hover{
              cursor : pointer;
              background-color : #63b3f5;
          }

        }
    }
  }

  .askDoubtPopup_close{
    display: flex;
    justify-content : flex-end;
    .close_icon{
      &:hover{
          color : #6d6969;
          cursor: pointer;
      }
  }
  }
`;


export default AskDoubtPopup
