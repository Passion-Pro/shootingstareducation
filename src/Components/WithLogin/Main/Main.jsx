import React from 'react';
import './Main.css'
import Chat from '../Chat/Chat'
import HeaderMain from '../Header/HeaderMain'
import Notification from '../Notification/Notification'
import UpcomingClass from '../Notices/UpcomingClass';
import Notices from '../Notices/Notices';

function Main() { 
    return (
        <div className="main">
            <HeaderMain/>
            {/* </div> */}
            <div className="mainBody">
                <div className="mainBodyIN">
                <div id="chat">
                <Chat />
                </div>
                <div id="noti">
                <Notification/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main
