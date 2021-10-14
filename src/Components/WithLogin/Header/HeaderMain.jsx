import React, { useState } from 'react';
import './HeaderMain.css';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';

function HeaderMain() {

  const [showDiv,setShowDiv]=useState(false);
    return (
      <>
        <div className="headerMain">
       <div className="headerMain__Left">
      
       <div className="HeaderMain__Logo">
              <img src={"/img/lolo.svg"} alt="logo" className="logo"/>
              <img src="/img/Star_logo.png" alt="" className="logo_m"/>
       </div>
       </div>
       <div className="headerMain__Middle">
         <div className="headerMain__Middle">
           <div className="headerMain__assignment"> 
           <IconButton>
           <AssignmentIcon/>
           </IconButton>
           <div className="headerMain__chat__text">
              Assignment
             </div>
           </div>
           <div className="headerMain__doubt">
           <IconButton>
            <QuestionAnswerIcon/>
            </IconButton>
            <div className="headerMain__chat__text">
              Doubt
             </div>
           </div>
         </div>
       </div> 
      <div className="HeaderMain__Right">
     <div className="HeaderMain__Right__Div">
     <div className="HeaderMain__Selectcourse">
        <div className="HeaderMain__Selectcourse__Name">
          WEB DEVELOPMENT
        </div>
        <div className="HeaderMain__SelectCourse_icon" onClick={()=>setShowDiv(!showDiv)}>
        <ArrowDropDownRoundedIcon/>
        </div>
        </div>
     </div>
        <div className="HeaderMain__Profile">
        <AccountCircleRoundedIcon fontSize="large"/>
        </div> 
      </div>
        </div>
         <div className={showDiv?"HeaderMain__HiddenDiv":"HeaderMain__HiddenDiv_hide"}>
          <div className="HeaderMain__HiddenDiv__IN"  onClick={()=>setShowDiv(!showDiv)}>
            WEB DEVELOPMENT
          </div>
           </div>
          <div className="HeaderMain__For__Mobile">
           <div className="headerMain__chat">
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
           <div className="account__profile">
             <IconButton>
        <AccountCircleRoundedIcon />
        </IconButton>
           </div>
          </div>
           </>
    )
}

export default HeaderMain;
