import { Divider } from "@mui/material";
import React, { useState } from "react";
import HeaderMain from "../Header/HeaderMain";
import "./LeaderBoard.css";
import LeaderBoardNumber from "./LeaderBoardNumber";
import LeaderSecHead from "./LeaderSecHead";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import { useHistory } from "react-router";

function LeaderBoard() {
  var today=new Date();
    const history=useHistory();
    const [showdate,setShowdate]=useState(false);
    const [date,setDate]=useState(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
    var dateC=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var date= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  return (
    <div className="LeaderBoard">
      <HeaderMain />
      <div className="LeaderBoard__Header">
      </div>
      <div className="leaderboard__Body">
        <div className="leaderboard__body__In">
          <div className="leaderboard__body__In__Header">
              <div className="leadeaboard__body__Header__back">
               <ArrowBackRoundedIcon onClick={()=>
                  history.push('/main')
               }/>
              </div>
              <div className="leaderboard__body__Header__text">
              LeaderBoard
              </div>
          </div>
          <div className="leaderboard__body__In__head_head" onClick={()=>{
              setShowdate(!showdate)
          }}>
            <input type="date" id="start" name="trip-start"
       value={date} onChange={e=>setDate(e.target.value)}
       min="2021-10-08" max={dateC} />
            <h6>
            {showdate?<ArrowDropUpRoundedIcon/>:<ArrowDropDownRoundedIcon />}
            </h6>
          </div>
          <LeaderSecHead />
          <Divider />
          <div className="leaderboard__body__In__Body">
          <LeaderBoardNumber name={"Yo YO Honey Singh"} />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          <LeaderBoardNumber />
          </div>
         <div className="scroll">
         Scroll down to see more
         </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
