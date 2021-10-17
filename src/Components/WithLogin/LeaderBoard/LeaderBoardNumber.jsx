import { Divider } from '@mui/material';
import React from 'react';
import './LeaderBoardNumber.css'

function LeaderBoardNumber({name}) {
    return (
        // <>
        <div className="LeaderBoardNumber">
            <div className="LeadearBoardNumber__First">
                <div className="Serial__Num">
                  1
                </div>
                <div className="leader__Fotu">
                   {name && name[0]}
                </div>
                <div className="leader__Name">
                    {name?name:"Nishant Mainwal"}
                </div>
            </div>
            <div className="LeaderBoardNumber__Sec">
            
            </div>
    <Divider/>
        </div>
    // </>
    )
}

export default LeaderBoardNumber
