import React, { useEffect } from 'react'
import styled from "styled-components"
import AddNotice from './AddNotice';
import NoticeTeacher from './NoticeTeacher';
import UpdateNoticeTeacher from './UpdateNoticeTeacher';

function NoticesTeacher() {

    const [notices,setNotices]=useEffect([]);

    // useEffect(()=>{
    //     if(teacherCourseId && teacherSubjectId){
    //       db.collection('Courses').doc(teacherCourseId).collection("Subjects").doc(teacherSubjectId).collection('noticesHeader').onSnapshot((snapshot)=>(
    //         setNoticesHeader(
    //           snapshot.docs.map((doc) => ({
    //             data: doc.data(),
    //             id: doc.id,
    //           }))
    //         )
    //       ))
    //     }
    //   },[teacherCourseId,teacherSubjectId]);

    //   console.log(noticesHeader);
    return (
        <>
            <Container> 
              <UpdateNoticeTeacher/>
               <div className="all_notices">
                   <NoticeTeacher/>
               </div>
            </Container>
        </>
    )
};

const Container=styled.div`

  width : 100%;
  border-radius : 10px;
  padding : 10px;
  padding-top : 15px;
  height: 80vh;

  .all_notices{
      margin-top : 14px;
      height : 60vh;
      overflow-y: scroll;
  }
  .For__Teacher{
     display: flex;
 }
 .Update{
     display: flex;
     justify-content: center;
     align-items: center;
     width: 40px;
 }
 .addNotice{
     display: flex;
     width: 100%;
     height: fit-content;
     padding: 8px;
     background-color: white;
     border-radius: 8px;
 }
 .plusText{
     display: flex;
     padding-left: 12px;
     font-weight: 700;
 }
`;


export default NoticesTeacher;
