import React, { useState } from 'react';
import './HeaderTeacher.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatIcon from '@mui/icons-material/Chat';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router';

function HeaderTeacher() {

  const [showDiv,setShowDiv]=useState(false);
  const history=useHistory();
    return (
      <>
        <div className="headerTeacher">
       <div className="headerTeacher__Left">
       <div className="HeaderTeacher__Logo" onClick={()=>
       history.push('/main')
      }>
              <img src={"/img/lolo.svg"} alt="logo" className="logo"/>
              <img src="/img/Star_logo.png" alt="" className="logo_m"/>
       </div>
       </div>
       <div className="headerTeacher__Middle">
         <div className="headerTeacher__Middle">
           <div className="headerTeacher__assignment" onClick={() => history.push("/AssignmentsPage")}> 
           <IconButton>
           <AssignmentIcon/>
           </IconButton>
           <div className="headerTeacher__chat__text">
              Assignment
             </div>
           </div>
           <div className="headerTeacher__assignment" onClick={() => history.push('/DoubtsPage')}>
           <IconButton >
            <QuestionAnswerIcon/>
            </IconButton>
            <div className="headerTeacher__chat__text">
              Doubt
             </div>
           </div>
           <div className="headerTeacher__assignment" onClick={()=>history.push('/leaderboard')}>
           <IconButton>
           <LeaderboardIcon />
            </IconButton>
            <div className="headerTeacher__chat__text">
              LeaderBoard
             </div>
           </div>
         </div>
       </div> 
       <div className="headerTeacher__assignment" onClick={()=>{
          history.push('/profile')
        }}>
           <IconButton>
        <AccountCircleRoundedIcon/>
            </IconButton>
            <div className="headerTeacher__chat__text">
              Account
             </div>
           </div>
        </div>
          <div className="HeaderTeacher__For__Mobile">
           <div className="headerTeacher__chat" onClick={()=>history.push('/mainchat')}>
             <IconButton>
             <ChatIcon/>
             </IconButton>
           </div>
           <div className="headerTeacher__assignment"> 
           <IconButton>
           <AssignmentIcon/>
           </IconButton>
           </div>
           <div className="headerTeacher__doubt">
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
