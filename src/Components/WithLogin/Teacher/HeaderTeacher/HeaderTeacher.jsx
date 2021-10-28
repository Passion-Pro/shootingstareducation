import React, { useEffect, useState } from 'react';
import './HeaderTeacher.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatIcon from '@mui/icons-material/Chat';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router';
import db from '../../../../firebase';
import { useStateValue } from '../../../../StateProvider';
import { actionTypes } from '../../../../reducer';


function HeaderTeacher() {
  const [{ signInAs, user,teacherSubjectId}, dispatch] =useStateValue();
  const [showDiv,setShowDiv]=useState(false);
  const history=useHistory();
  
  useEffect(()=>{
    if(signInAs?.courseName){
      db.collection("Courses")
      .where("name", "==",signInAs?.courseName)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("doc?.id",doc?.id)
          dispatch({
            type:actionTypes.SET_TEACHER_COURSE_ID,
            teacherCourseId:doc.id,
          })
          db.collection("Courses").doc(doc.id).collection('Subjects')
          .where("name", "==",signInAs?.courseSubject)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc1) => {
              dispatch({
                  type:actionTypes.SET_TEACHER_SUBJECT_ID,
                  teacherSubjectId:doc1.id,
              })
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    }
   },[signInAs?.courseName]);
   console.log(teacherSubjectId)

    return (
      <>
        <div className="headerMain">
       <div className="headerMain__Left">
       <div className="HeaderMain__Logo" onClick={()=>
       history.push('/main')
      }>
              <img src={"/img/lolo.svg"} alt="logo" className="logo"/>
              <img src="/img/Star_logo.png" alt="" className="logo_m"/>
       </div>
       </div>
       <div className="headerMain__Middle">
         <div className="headerMain__Middle">
           <div className="headerMain__assignment" onClick={() => history.push("/AssignmentsPage")}> 
           <IconButton>
           <AssignmentIcon/>
           </IconButton>
           <div className="headerMain__chat__text">
              Assignment
             </div>
           </div>
           <div className="headerMain__assignment" onClick={() => history.push('/DoubtsPage')}>
           <IconButton >
            <QuestionAnswerIcon/>
            </IconButton>
            <div className="headerMain__chat__text">
              Doubt
             </div>
           </div>
           <div className="headerMain__assignment" onClick={()=>history.push('/leaderboard')}>
           <IconButton>
           <LeaderboardIcon />
            </IconButton>
            <div className="headerMain__chat__text">
              LeaderBoard
             </div>
           </div>
         </div>
       </div> 
      <div className="HeaderMain__Right">
     <div className="HeaderMain__Right__Div">
     </div>
        <div className="HeaderMain__Profile" onClick={()=>{
          history.push('/profile')
        }}>
          <div className="headerMain__assignment" onClick={()=>history.push('/leaderboard')}>
           <IconButton>
        <AccountCircleRoundedIcon />
            </IconButton>
            <div className="headerMain__chat__text">
              LeaderBoard
             </div>
           </div>
        </div> 
      </div>
        </div>
          <div className="HeaderMain__For__Mobile">
           <div className="headerMain__chat" onClick={()=>history.push('/mainchat')}>
             <IconButton>
             <ChatIcon/>
             </IconButton>
           </div>
           <div className="headerMain__assignment"> 
           <IconButton>
           <AssignmentIcon/>
           </IconButton>
           </div>
           <div className="headerMain__doubt">
              <IconButton>
            <QuestionAnswerIcon/>
            </IconButton>
           </div>
           <div className="account__profile" onClick={()=>history.push('/leaderboard')}>
             <IconButton>
        <LeaderboardIcon />
        </IconButton>
           </div>
          </div>
           </>
    )
}

export default HeaderTeacher;
