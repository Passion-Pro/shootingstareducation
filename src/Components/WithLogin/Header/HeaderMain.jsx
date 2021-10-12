import React from 'react';
import './HeaderMain.css';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

function HeaderMain() {
    return (
        <div className="headerMain">
       <div className="headerMain__Dehazeicon">
       <DehazeRoundedIcon /> 
       </div>
       <div className="HeaderMain__Logo">
              
       </div>
      <div className="HeaderMain__Right">
      <div className="HeaderMain__Selectcourse">
        <div className="HeaderMain__Selectcourse__Name">
          WEB DEVELOPMENT
        </div>
        <div className="HeaderMain__SelectCourse_icon">
        <ArrowDropDownRoundedIcon/>
        </div>
        </div>
        <div className="HeaderMain__Profile">
        <AccountCircleRoundedIcon fontSize="large"/>
        </div>
      </div>
        </div>
    )
}

export default HeaderMain
