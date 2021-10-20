import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom";

function StudentName() {
    const history = useHistory();
    const openChat = (e) => {
        e.preventDefault();
        history.push("/doubtsMessagesPageForTeachers")
    }
    return (
       <>
        <Container>
          <p onClick={openChat}>Ronak</p>
        </Container>
       </>
    )
};

const Container  = styled.div`
border-bottom: 1px solid lightgray;
 p{
     padding: 10px;
     margin-bottom : 10px;
     font-size : 18px;
 }
 &:hover{
     cursor: pointer;
     background-color : #ecebeb
 }
`;

export default StudentName
