import React from 'react'
import styled from "styled-components"
import UpcomingClass from "./UpcomingClass"
import Notice from "./Notice"

function Notices() {
    return (
        <>
            <Container> 
              <UpcomingClass/>
               <div className="all_notices">
                   <Notice/>
                   <Notice/>
                   <Notice/>
                   <Notice/>
                   <Notice/>
                   <Notice/>
               </div>
            </Container>
        </>
    )
};

const Container=styled.div`
  margin:20px;
  margin-top : 0px;
  /* margin-left : 0px;
  margin-right : 40px; */
  width : 100%;
  /* background-color : #e9e6e6; */
  border-radius : 10px;
  padding : 10px;
  padding-top : 15px;
  height: 80vh;
  /* height : fit-content; */

  .all_notices{
      margin-top : 40px;
      height : 60vh;
      overflow-y: scroll;
  }
`;


export default Notices
